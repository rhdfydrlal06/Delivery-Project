"""
delivery_app 생성 및 실행
"""
from flask import Flask
from flask_cors import CORS


def create_app():
    '''
    flask 객체를 만들어 반환
    input:
    output: app
    '''
    app = Flask(__name__)
    CORS(app, supports_credentials=True)

    @app.route("/")
    def landing():
        return "Hello DeliveryApp"

    return app


application = create_app()

if __name__ == "__main__":
    HOST = '0.0.0.0'
    PORT = 5000
    application.run(host=HOST, port=PORT, debug=True)
