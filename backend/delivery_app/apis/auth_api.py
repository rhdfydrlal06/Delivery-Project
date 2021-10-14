from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt
from flask_jwt_extended import (
    create_access_token,
    get_jwt_identity,
    jwt_required,
    create_refresh_token,
)
from flask_jwt_extended.utils import decode_token

from delivery_app.utils.validation import (
    validate_email,
    validate_name,
    validate_password,
)
from delivery_app.services.user import (
    db,
    insert_user,
    get_user_by_email,
    get_user_by_id,
)

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
    try:
        user.token = refresh_token
        db.session.commit()
    except Exception:
        db.session.rollback()
        raise

    return (
        jsonify(
            result="success",
            message="로그인 성공",
            access_token=access_token,
        ),
        200,
    )


@bp.route("/signout", methods=["POST"])
def auth_signout():
    user_id = request.json.get("id")
    user = get_user_by_id(user_id=user_id)

    if not user:
        return jsonify(result="fail", message="존재하지 않는 사용자입니다."), 400

    try:
        user.token = None
        db.session.commit()
        return jsonify(result="success"), 200
    except Exception:
        db.session.rollback()
        raise


@bp.route("/refresh", methods=["POST"])
def refresh_token():
    user_id = request.json.get("id")
    user = get_user_by_id(user_id=user_id)
    refresh_token = user.token

    if not user.token:
        return jsonify(result="fail", message="로그인 해주세요"), 400

    try:
        decoded_token = decode_token(refresh_token)
        access_token = create_access_token(
            identity=decoded_token.get("sub"),
            additional_claims={"email": user.email, "name": user.name},
        )
        return jsonify(result="success", access_token=access_token), 200
    except Exception:
        user.token = None
        db.session.commit()
        return jsonify(result="fail", message="다시 로그인 해주세요"), 400
