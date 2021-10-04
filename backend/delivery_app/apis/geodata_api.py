"""
geodata api
지역에 관련된 정보를 제공
"""
from flask import Blueprint, jsonify

from services.address import get_addresses, get_address

bp = Blueprint("geodata", __name__)


@bp.route("/list", methods=["GET"])
def geo_list():
    """
    GET /api/geodata/list
    모든 지역에 관한 기본 데이터 반환(id, 이름, 좌표)
    input:
    output: list({id, location1, location2, latitude, longitude}, ...)
        id : key
        location1 : 시도 이름
        locaton2 : 시군구 이름
        latitude: 위도
        logitude: 경도
    """
    result = []
    geodata = get_addresses()
    for data in geodata:
        result.append(
            {
                "id": data.id,
                "location1": data.location1,
                "location2": data.location2,
                "latitude": data.latitude,
                "longitude": data.longitude,
            }
        )
    return jsonify(data=result)


@bp.route("/graph/order-per-time/<int:geo_id>", methods=["GET"])
def get_order_graph(geo_id):
    """
    id에 해당하는 지역의 데이터, 시간-지역별 주문량 그래프와 설명을 반환
    GET /api/geodata/graph/order-per-time/<id>
    input: id
    output: {
        id,
        location1,
        location2,
        latitude,
        longitude,
        graph,
        description
    }
    """
    address = get_address(geo_id)
    result = {
        "id": address.id,
        "location1": address.location1,
        "location2": address.location2,
        "latitude": address.latitude,
        "longitude": address.longitude,
        "graph": address.graph1,
        "description": address.description1,
    }

    return jsonify(data=result)


@bp.route("/graph/stores/<int:geo_id>", methods=["GET"])
def get_store_graph(geo_id):
    """
    id에 해당하는 지역의 데이터, 배달상점분포 그래프와 설명을 반환
    GET /api/geodata/graph/order-per-time/<id>
    input: id
    output: {
        id,
        location1,
        location2,
        latitude,
        longitude,
        graph,
        description
    }
    """
    address = get_address(geo_id)
    result = {
        "id": address.id,
        "location1": address.location1,
        "location2": address.location2,
        "latitude": address.latitude,
        "longitude": address.longitude,
        "graph": address.graph2,
        "description": address.description2,
    }

    return jsonify(data=result)
