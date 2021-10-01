from app import db


class Address(db.Model):
    __tablename__ = "address"

    id              = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    address1        = db.Column(db.String(32), nullable=False)
    address2        = db.Column(db.String(32), nullable=True)
    latitude        = db.Column(db.Float, nullable=False)
    longitude       = db.Column(db.Float, nullable=False)
    graph1          = db.Column(db.String(1024), nullable=True)
    graph2          = db.Column(db.String(1024), nullable=True)
    description1    = db.Column(db.Text, nullable=True)
    description2    = db.Column(db.Text, nullable=True)

    def __init__(self, address1, address2, latitude, longitude, graph1, graph2, description1, description2):
        self.address1 = address1
        self.address2 = address2
        self.latitude = latitude
        self.longitude = longitude
        self.graph1 = graph1
        self.graph2 = graph2
        self.description1 = description1
        self.description2 = description2

