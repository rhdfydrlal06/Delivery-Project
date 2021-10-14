from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt
from flask_jwt_extended import (
    create_access_token,
    get_jwt_identity,
    jwt_required,
    # jwt_refresh_token_required,
)
from flask_jwt_extended.utils import create_refresh_token

from delivery_app.utils.validation import (
    validate_email,
    validate_name,
    validate_password,
)
from delivery_app.services.user import insert_user, get_user_by_email

bp = Blueprint("auth", __name__)
bcrypt = Bcrypt()


@bp.route("/signup", methods=["POST"])
def auth_signup():
    email = request.json.get("email")
    password = request.json.get("password")
    name = request.json.get("name")

    if not validate_email(email):
        return jsonify(result="failed", message="올바른 이메일 형식이 아닙니다."), 400

    if not validate_password(password):
        return jsonify(result="failed", message="올바른 비밀번호가 아닙니다."), 400

    if not validate_name(name):
        return jsonify(result="failed", message="올바른 이름이 아닙니다."), 400

    user = get_user_by_email(email)
    if user is not None:
        return jsonify(result="failed", message="이미 존재하는 이메일입니다."), 400

    pw_hash = bcrypt.generate_password_hash(password).decode("utf-8")
    insert_user(email, pw_hash, name)
    return jsonify(result="success", message="signup success"), 201


@bp.route("/signin", methods=["POST"])
def auth_signin():
    email = request.json.get("email")
    password = request.json.get("password")

    user = get_user_by_email(email)
    if user is None:
        return jsonify(result="failed", message="이메일 혹은 비밀번호가 일치하지 않습니다."), 401
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify(result="failed", message="이메일 혹은 비밀번호가 일치하지 않습니다."), 401

    access_token = create_access_token(
        identity=user.id, additional_claims={"email": user.email, "name": user.name}
    )
    refresh_token = create_refresh_token(identity=user.id)

    return (
        jsonify(
            result="success",
            message="로그인 성공",
            access_token=access_token,
            refresh_token=refresh_token,
        ),
        200,
    )


# @bp.route("/refresh", methods=["POST"])
# @jwt_refresh_token_required
# def refresh_token():
#     current_user = get_jwt_identity()
#     access_token = create_access_token(identity=current_user)
#     pass
