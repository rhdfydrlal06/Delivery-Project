"""
board api
게시판 관리 api
"""
from flask import Blueprint, request, jsonify

from delivery_app.models.posts import *
from delivery_app.services.board import add_post, get_posts

bp = Blueprint("board", __name__)


@bp.route("/post", methods=['POST'])
def post_board():
    """
    입력받은 게시글 DB에 저장하기
    """
    id = request.json.get("id")
    location1 = request.json.get("location1")
    location2 = request.json.get("location2")
    category = request.json.get("category")
    post = request.json.get("post")
    new_post_id = add_post(id, location1, location2, category, post)
    return {"result": "success", "itemId": new_post_id}

@bp.route("/get", methods=['GET'])
def get_board(location1, location2, category):
    """
    DB에 저장되어 있는 게시글 불러오기
    """
    result = []
    posts = get_posts(location1, location2, category)

    for post in posts:
        result.append(post.to_dict())

    return jsonify(result="success", posts = result)
