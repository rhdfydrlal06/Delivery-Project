"""
location 모델
"""
from db_connect import db


class Address(db.Model):
    '''
    id: 키값
    location1: 시도 이름
    location2: 시군구 이름
    latitude: 위도
    longitude: 경도
    graph1: 시간-지역별 주문량 그래프
    graph2: 배달상점분포 그래프
    description1: 시간-지역별 주문량 그래프 설명
    description2: 배달상점분포 그래프 설명
    '''
    __tablename__ = "address"

    id              = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    location1        = db.Column(db.String(32), nullable=False)
    location2        = db.Column(db.String(32), nullable=True)
    latitude        = db.Column(db.Float, nullable=False)
    longitude       = db.Column(db.Float, nullable=False)
    graph1          = db.Column(db.String(1024), nullable=True)
    graph2          = db.Column(db.String(1024), nullable=True)
    description1    = db.Column(db.Text, nullable=True)
    description2    = db.Column(db.Text, nullable=True)

    def __init__(self, location1, location2, latitude, longitude, graph1, graph2, description1, description2):
        self.location1 = location1
        self.location2 = location2
        self.latitude = latitude
        self.longitude = longitude
        self.graph1 = graph1
        self.graph2 = graph2
        self.description1 = description1
        self.description2 = description2
