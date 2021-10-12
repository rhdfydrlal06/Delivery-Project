from delivery_app.models.posts import *

def get_posts(location1, location2, category):
    """
    입력받은 location1, location2, category에 해당하는 게시글 반환
    """
    return Posts.query.filter_by(location1=location1, location2=location2, category=category).all()

def add_post(id, location1, location2, category, post):
    """
    입력받은 게시글 저장 후 location1, location2, category에 해당하는 게시글 반환
    """
    new_post = Posts(id, location1, location2, category, post)
    db.session.add(new_post)
    db.session.commit()
    return Posts.query.filter_by(location1=location1, location2=location2, category=category).all()
