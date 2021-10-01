"""
Address 모델에 접근하는 서비스들
현재 임시 데이터로 대체
"""
from models.address import Address

address_sample = [
    {
        'id': 1,
        'location1': '서울특별시',
        'location2': None,
        'latitude': 37.56667,
        'longitude': 126.97806,
        'graph1': '/static/graph/sample_graph.png',
        'graph2': '/static/graph/sample_graph.png',
        'description1': '그래프 설명 1입니다.',
        'description2': '그래프 설명 2입니다.',
    },
    {
        'id': 2,
        'location1': '부산광역시',
        'location2': None,
        'latitude': 35.17944,
        'longitude': 129.07556,
        'graph1': '/static/graph/sample_graph.png',
        'graph2': '/static/graph/sample_graph.png',
        'description1': '그래프 설명 1입니다.',
        'description2': '그래프 설명 2입니다.',
    },
    {
        'id': 3,
        'location1': '대구광역시',
        'location2': None,
        'latitude': 35.87222,
        'longitude': 128.60250,
        'graph1': '/static/graph/sample_graph.png',
        'graph2': '/static/graph/sample_graph.png',
        'description1': '그래프 설명 1입니다.',
        'description2': '그래프 설명 2입니다.',
    },
    {
        'id': 4,
        'location1': '인천광역시',
        'location2': None,
        'latitude': 37.45639,
        'longitude': 126.70528,
        'graph1': '/static/graph/sample_graph.png',
        'graph2': '/static/graph/sample_graph.png',
        'description1': '그래프 설명 1입니다.',
        'description2': '그래프 설명 2입니다.',
    },
    {
        'id': 5,
        'location1': '광주광역시',
        'location2': None,
        'latitude': 35.15972,
        'longitude': 126.85306,
        'graph1': '/static/graph/sample_graph.png',
        'graph2': '/static/graph/sample_graph.png',
        'description1': '그래프 설명 1입니다.',
        'description2': '그래프 설명 2입니다.',
    },
    {
        'id': 6,
        'location1': '대전광역시',
        'location2': None,
        'latitude': 36.35111,
        'longitude': 127.38500,
        'graph1': '/static/graph/sample_graph.png',
        'graph2': '/static/graph/sample_graph.png',
        'description1': '그래프 설명 1입니다.',
        'description2': '그래프 설명 2입니다.',
    },
    {
        'id': 7,
        'location1': '울산광역시',
        'location2': None,
        'latitude': 35.53889,
        'longitude': 129.31667,
        'graph1': '/static/graph/sample_graph.png',
        'graph2': '/static/graph/sample_graph.png',
        'description1': '그래프 설명 1입니다.',
        'description2': '그래프 설명 2입니다.',
    },
    {
        'id': 8,
        'location1': '세종특별자치시',
        'location2': None,
        'latitude': 36.48750,
        'longitude': 127.28167,
        'graph1': '/static/graph/sample_graph.png',
        'graph2': '/static/graph/sample_graph.png',
        'description1': '그래프 설명 1입니다.',
        'description2': '그래프 설명 2입니다.',
    },
    {
        'id': 9,
        'location1': '경기도',
        'location2': None,
        'latitude': 37.586432,
        'longitude': 127.046277,
        'graph1': '/static/graph/sample_graph.png',
        'graph2': '/static/graph/sample_graph.png',
        'description1': '그래프 설명 1입니다.',
        'description2': '그래프 설명 2입니다.',
    },
    {
        'id': 10,
        'location1': '강원도',
        'location2': None,
        'latitude': 37.8304115,
        'longitude': 128.2260705,
        'graph1': '/static/graph/sample_graph.png',
        'graph2': '/static/graph/sample_graph.png',
        'description1': '그래프 설명 1입니다.',
        'description2': '그래프 설명 2입니다.',
    },
    {
        'id': 11,
        'location1': '충청북도',
        'location2': None,
        'latitude': 36.635684,
        'longitude': 127.49139,
        'graph1': '/static/graph/sample_graph.png',
        'graph2': '/static/graph/sample_graph.png',
        'description1': '그래프 설명 1입니다.',
        'description2': '그래프 설명 2입니다.',
    },
    {
        'id': 12,
        'location1': '충청남도',
        'location2': None,
        'latitude': 36.658827,
        'longitude': 126.672835,
        'graph1': '/static/graph/sample_graph.png',
        'graph2': '/static/graph/sample_graph.png',
        'description1': '그래프 설명 1입니다.',
        'description2': '그래프 설명 2입니다.',
    },
    {
        'id': 13,
        'location1': '전라북도',
        'location2': None,
        'latitude': 35.8242238,
        'longitude': 127.1479532,
        'graph1': '/static/graph/sample_graph.png',
        'graph2': '/static/graph/sample_graph.png',
        'description1': '그래프 설명 1입니다.',
        'description2': '그래프 설명 2입니다.',
    },
    {
        'id': 14,
        'location1': '전라남도',
        'location2': None,
        'latitude': 34.816862,
        'longitude': 126.464532,
        'graph1': '/static/graph/sample_graph.png',
        'graph2': '/static/graph/sample_graph.png',
        'description1': '그래프 설명 1입니다.',
        'description2': '그래프 설명 2입니다.',
    },
    {
        'id': 15,
        'location1': '경상북도',
        'location2': None,
        'latitude': 36.25,
        'longitude': 128.75,
        'graph1': '/static/graph/sample_graph.png',
        'graph2': '/static/graph/sample_graph.png',
        'description1': '그래프 설명 1입니다.',
        'description2': '그래프 설명 2입니다.',
    },
    {
        'id': 16,
        'location1': '경상남도',
        'location2': None,
        'latitude': 35.25,
        'longitude': 128.25,
        'graph1': '/static/graph/sample_graph.png',
        'graph2': '/static/graph/sample_graph.png',
        'description1': '그래프 설명 1입니다.',
        'description2': '그래프 설명 2입니다.',
    },
    {
        'id': 17,
        'location1': '제주특별자치도',
        'location2': None,
        'latitude': 33.376163,
        'longitude': 126.547420,
        'graph1': '/static/graph/sample_graph.png',
        'graph2': '/static/graph/sample_graph.png',
        'description1': '그래프 설명 1입니다.',
        'description2': '그래프 설명 2입니다.',
    },
]


def get_addresses():
    '''
    Address모델로부터 모든 address를 얻어 반환
    input:
    output: address list
    '''
    result = address_sample
    return result


def get_address(address_id):
    '''
    입력받은 id에 해당하는 지역 데이터 1개 반환
    input: address_id
    output: {
        id,
        location1,
        location2,
        latitude,
        logitude,
        graph1,
        graph2,
        description1,
        description2
    }
    '''

    result = {}

    for address in address_sample:
        if address_id == address['id']:
            result = address
            break

    return result
