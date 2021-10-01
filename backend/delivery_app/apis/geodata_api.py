"""
geodata api
지역에 관련된 정보를 제공
"""
from flask import Blueprint, jsonify

from services.address import get_addresses

bp = Blueprint('geodata', __name__)


@bp.route("/list", methods=['GET'])
def geo_list():
    '''
    GET api/geodata/list
    모든 지역에 관한 기본 데이터 반환(id, 이름, 좌표)
    input:
    output: list({id, location1, location2, latitude, longitude}, ...)
        id : key
        location1 : 시도 이름
        locaton2 : 시군구 이름
        latitude: 위도
        logitude: 경도
    '''
    try:
        result = []
        geodata = get_addresses()
        for data in geodata:
            result.append({
                "id": data['id'],
                "location1": data['location1'],
                "location2": data['location2'],
                "latitude": data['latitude'],
                "longitude": data['longitude']
            })
        return jsonify(data=result)
    except:
        return jsonify(message='error')
