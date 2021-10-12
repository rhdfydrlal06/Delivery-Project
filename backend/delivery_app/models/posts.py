from delivery_app.db_connect import db

class Posts(db.Model):
    """
    id: 글 id
    location1: 시도 이름
    location2: 시군구 이름
    category: 글 카테고리
    post: 글 내용
    """
    __tablename__ = 'posts'
    
    id              = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    location1       = db.Column(db.String(32), nullable=False)
    location2       = db.Column(db.String(32), nullable=False)
    category        = db.Column(db.String(32), nullable=False)
    post            = db.Column(db.Text, nullable=True)

    def __init__(self, id, location1, location2, category, post):
        self.id             = id
        self.location1      = location1
        self.location2      = location2
        self.category       = category
        self.post           = post
    
    def to_dict(self):
        return {
            "id": self.id,
            "location1": self.location1,
            "location2": self.location2,
            "category": self.category,
            "post": self.post,
        }
