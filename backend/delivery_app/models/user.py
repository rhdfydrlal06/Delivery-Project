from enum import unique
from delivery_app.db_connect import db


class User(db.Model):

    __tablename__ = "user"

    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    email = db.Column(db.String(256), nullable=False, unique=True)
    password = db.Column(db.String(64), nullable=False)
    name = db.Column(db.String(20), nullable=False)

    def to_dict(self):
        return {"id": self.id, "email": self.email, "name": self.name}
