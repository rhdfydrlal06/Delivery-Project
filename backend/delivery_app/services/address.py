"""
Address 모델에 접근하는 서비스들
현재 임시 데이터로 대체
"""
from delivery_app.models.address import db, Address

address_sample = [
    {
        "location1": "전국",
        "location2": None,
        "latitude": 36.0,
        "longitude": 127.51,
        "graph1": "/statics/graph/corona/korea_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "전국의 확진자수는 21년 7월 ~ 9월까지 가장 많이 증가했어요.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "서울특별시",
        "location2": None,
        "latitude": 37.56667,
        "longitude": 126.97806,
        "graph1": "/statics/graph/corona/seoul_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "서울특별시의 확진자수는 21년 7월 ~ 9월까지 가장 많이 증가했어요.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "부산광역시",
        "location2": None,
        "latitude": 35.17944,
        "longitude": 129.07556,
        "graph1": "/statics/graph/corona/busan_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "부산의 확진자수는 21년 7월 ~ 8월까지 가장 많이 증가했어요.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "대구광역시",
        "location2": None,
        "latitude": 35.87222,
        "longitude": 128.60250,
        "graph1": "/statics/graph/corona/daegu_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "대구광역시의 확진자수는 코로나 발생 초기에 대폭 증가했어요.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "인천광역시",
        "location2": None,
        "latitude": 37.45639,
        "longitude": 126.70528,
        "graph1": "/statics/graph/corona/incheon_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "인천광역시의 확진자수는 21년 7월 ~ 9월까지 가장 많이 증가했어요.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "광주광역시",
        "location2": None,
        "latitude": 35.15972,
        "longitude": 126.85306,
        "graph1": "/statics/graph/corona/gwangju_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "광주광역시의 확진자수는 21년 7월 ~ 8월까지 가장 많이 증가했어요.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "대전광역시",
        "location2": None,
        "latitude": 36.35111,
        "longitude": 127.38500,
        "graph1": "/statics/graph/corona/daejeon_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "대전광역시의 확진자수는 21년 7월 ~ 8월까지 가장 많이 증가했어요.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "울산광역시",
        "location2": None,
        "latitude": 35.53889,
        "longitude": 129.31667,
        "graph1": "/statics/graph/corona/ulsan_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "울산광역시의 확진자수는 21년 4~5월, 21년 8~9월에 가장 많이 증가했어요.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "세종특별자치시",
        "location2": None,
        "latitude": 36.48750,
        "longitude": 127.28167,
        "graph1": "/statics/graph/corona/sejong_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "세종특별자치시의 확진자수는 21년 7월 ~ 9월까지 가장 많이 증가했어요.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "경기도",
        "location2": None,
        "latitude": 37.586432,
        "longitude": 127.046277,
        "graph1": "/statics/graph/corona/gyeongi_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "경기도의 확진자수는 21년 7월 ~ 9월까지 가장 많이 증가했어요.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "강원도",
        "location2": None,
        "latitude": 37.8304115,
        "longitude": 128.2260705,
        "graph1": "/statics/graph/corona/gangwon_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "강원도의 확진자수는 21년 7월 ~ 8월까지 가장 많이 증가했어요.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "충청북도",
        "location2": None,
        "latitude": 36.635684,
        "longitude": 127.49139,
        "graph1": "/statics/graph/corona/choongbuk_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "충청북도의 확진자수는 21년 7월 ~ 9월까지 가장 많이 증가했어요.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "충청남도",
        "location2": None,
        "latitude": 36.658827,
        "longitude": 126.672835,
        "graph1": "/statics/graph/corona/choongnam_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "충청남도의 확진자수는 21년 7월 ~ 9월까지 가장 많이 증가했어요.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "전라북도",
        "location2": None,
        "latitude": 35.8242238,
        "longitude": 127.1479532,
        "graph1": "/statics/graph/corona/jeonbuk_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "전라북도의 확진자수는 21년 7월 ~ 9월까지 가장 많이 증가했어요.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "전라남도",
        "location2": None,
        "latitude": 34.816862,
        "longitude": 126.464532,
        "graph1": "/statics/graph/corona/jeonnam_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "전라남도의 확진자수는 21년 7월 ~ 9월까지 가장 많이 증가했어요.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "경상북도",
        "location2": None,
        "latitude": 36.25,
        "longitude": 128.75,
        "graph1": "/statics/graph/corona/gyeonbuk_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "경상북도의 확진자수는 21년 7월 ~ 9월까지 가장 많이 증가했어요.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "경상남도",
        "location2": None,
        "latitude": 35.25,
        "longitude": 128.25,
        "graph1": "/statics/graph/corona/gyeongnam_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "경상남도의 확진자수는 21년 7월 ~ 8월까지 가장 많이 증가했어요.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "제주특별자치도",
        "location2": None,
        "latitude": 33.376163,
        "longitude": 126.547420,
        "graph1": "/statics/graph/corona/jaeju_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "제주도의 확진자수는 21년 7월 ~ 8월까지 가장 많이 증가했어요.",
        "description2": "그래프 설명 2입니다.",
    },
]


def set_default():
    """
    address 테이블 임시로 채우는 함수
    """
    try:
        addresses = get_addresses()
        if len(addresses) > 0:
            return

        for data in address_sample:
            new_address = Address(
                location1=data["location1"],
                location2=data["location2"],
                latitude=data["latitude"],
                longitude=data["longitude"],
                graph1=data["graph1"],
                graph2=data["graph2"],
                description1=data["description1"],
                description2=data["description2"],
            )
            db.session.add(new_address)
        db.session.commit()
    except Exception:
        db.session.rollback()
        raise


def get_addresses():
    """
    Address모델로부터 모든 address를 얻어 반환
    input:
    output: address list
    """
    result = Address.query.all()

    return result


def get_address(address_id):
    """
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
    """
    result = Address.query.filter_by(id=address_id).one_or_none()

    return result
