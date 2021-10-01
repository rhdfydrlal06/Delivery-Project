"""
delivery_app 생성 및 실행
"""
from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

import config

from apis import geodata_api


db = SQLAlchemy()

def create_app():
    '''
    flask 객체를 만들어 반환
    input:
    output: app
    '''
    app = Flask(__name__, static_url_path='/static')
    CORS(app, supports_credentials=True)

    app.config.from_object(config)
    db.init_app(app)
    Migrate().init_app(app, db)

    app.register_blueprint(geodata_api.bp, url_prefix='/api/geodata')


    @app.route("/")
    def landing():
        return "Hello DeliveryApp"

    return app


application = create_app()

if __name__ == "__main__":
    HOST = '0.0.0.0'
    PORT = 5000
    application.run(host=HOST, port=PORT, debug=True)
