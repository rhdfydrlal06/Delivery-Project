from delivery_app.models.posts import Posts, db


def get_post(post_id):
    """
    입력받은 id에 해당하는 게시글 조회 및 리턴
    input: post_id(int)
    output: Posts 객체 하나
    """
    return Posts.query.filter_by(id=post_id).one_or_none()


def get_posts(location1, location2, food):
    """
    입력받은 location1, location2, category에 해당하는 게시글 반환
    """
    result = Posts.query
    if location1:
        result = result.filter_by(location1=location1)
        if location2:
            result = result.filter_by(location2=location2)

    if food:
        result = result.filter_by(food=food)

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


def delete_post(post_id):
    try:
        post = Posts.query.filter_by(id=post_id).one_or_none()
        if post is None:
            return None

        db.session.delete(post)
        db.session.commit()
        return post.id
    except Exception:
        db.session.rollback()
        raise


def update_image(post_id, image_url):
    try:
        post = Posts.query.filter_by(id=post_id).one_or_none()
        if post is None:
            return None

        post.image = image_url
        db.session.add(post)
        db.session.commit()
        return post
    except Exception:
        db.session.rollback()
        raise
