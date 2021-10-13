from delivery_app.models.posts import Posts, db


def get_post(post_id):
    """
    입력받은 id에 해당하는 게시글 조회 및 리턴
    input: post_id(int)
    output: Posts 객체 하나
    """
    _post = Posts.query.filter_by(id=post_id).one_or_none()
    _post.hit += 1
    db.session.add(_post)
    db.session.commit()
    return _post


def get_posts(location1, location2, category):
    """
    입력받은 location1, location2, category에 해당하는 게시글 반환
    """
    result = Posts.query
    if location1:
        result = result.filter_by(location1=location1)
        if location2:
            result = result.filter_by(location2=location2)

    if category:
        result = result.filter_by(category=category)

    return result.all()


def add_post(location1, location2, food, post, image, user):
    """
    입력받은 게시글 저장 후 location1, location2, category에 해당하는 게시글 반환
    """
    try:
        new_post = Posts(
            location1=location1,
            location2=location2,
            food=food,
            post=post,
            image=image,
            user=user,
        )
        db.session.add(new_post)
        db.session.commit()
        return new_post.id
    except Exception:
        db.session.rollback()
        raise

def edit_post(post_id, location1, location2, food, post, image):
    """
    user를 제외한 수정된 데이터를 가져와 DB 값 수정(수정 범위 논의)
    """
    try:
        _post = Posts.query.filter_by(id=post_id).one_or_none()
        if _post is None:
            return None

        _post = Posts.query.filter_by(id=post_id).one_or_none()
        _post.location1 = location1
        _post.location2 = location2
        _post.food = food
        _post.post = post
        _post.image = image
        db.session.add(_post)
        db.session.commit()
        return _post.id

    except Exception:
        db.session.rollback()
        raise


def delete_post(post_id):
    try:
        _post = Posts.query.filter_by(id=post_id).one_or_none()
        if _post is None:
            return None

        db.session.delete(_post)
        db.session.commit()
        return _post.id
    except Exception:
        db.session.rollback()
        raise
