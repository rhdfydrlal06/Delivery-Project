import datetime

from delivery_app.db_connect import db


class Posts(db.Model):
    """
    id: 글 id
    location1: 시도 이름
    location2: 시군구 이름
    category: 글 카테고리
    food: 음식 종류
    post: 글 내용
    image: 이미지 url
    hit: 조회수
    like: 좋아요 수
    user: 작성자
    nickname: 작성자 닉네임
    timestamp: 작성일
    """

    __tablename__ = "posts"

    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    location1 = db.Column(db.String(32), nullable=False)
    location2 = db.Column(db.String(32), nullable=False)
    category = db.Column(db.String(32), nullable=False)
    food = db.Column(db.String(64), nullable=False)
    post = db.Column(db.Text, nullable=True)
    image = db.Column(db.String(1024), nullalbe=False)
    user = db.Column(db.String(8), nullable=False)
    hit = db.Column(db.Integer, nullable=False)
    like = db.Column(db.Integer, nullalbe=False)
    timestamp = db.Column(db.Datetime(), nullable=False)

    def __init__(self, id, location1, location2, category, post, food, image, user):
        self.id = id
        self.location1 = location1
        self.location2 = location2
        self.category = category
        self.food = food
        self.post = post
        self.image = image
        self.user = user
        self.hit = 0
        self.like = 0
        self.timestamp = datetime.now()

    def to_dict(self):
        return {
            "id": self.id,
            "location1": self.location1,
            "location2": self.location2,
            "category": self.category,
            "food": self.food,
            "post": self.post,
            "image": self.image,
            "user": self.user,
            "hit": self.hit,
            "like": self.like,
            "timestamp": self.timestamp,
        }
