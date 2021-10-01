from flask import Blueprint, jsonify

from services.address import get_addresses

bp = Blueprint('geodata', __name__)

@bp.route("/list", methods=['GET'])
def geo_list():
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

