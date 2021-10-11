"""
analisys 모델
분석결과 데이터
"""
from delivery_app.db_connect import db


class Address(db.Model):
    """
    id: 키값
    date: 년-월
    region: 지역
    order_count: 배달량
    covid_count: 확진자 수
    """

    __tablename__ = "analisys"

    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    date = db.Column(db.DateTime())
    region = db.Column(db.String(32))
    order_count = db.Column(db.Integer)
    covid_count = db.Column(db.Integer)
