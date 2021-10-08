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
        "graph1": "/statics/graph/delivery_corona/seoul_delivery_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "최저 주문건수를 기록한 달은 06이고 총 63847 건의 주문건수가 존재했습니다.\
최고 주문건수를 기록한 달은 12이고 총 271089 건의 주문건수가 존재했습니다.\
최저 확진자수를 기록한 달은 04이고 총 183 건의 주문건수가 존재했습니다.\
최고 확진자수를 기록한 달은 07이고 총 13367 건의 주문건수가 존재했습니다.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "부산광역시",
        "location2": None,
        "latitude": 35.17944,
        "longitude": 129.07556,
        "graph1": "/statics/graph/delivery_corona/busan_delivery_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "최저 주문건수를 기록한 달은 02이고 총 2629 건의 주문건수가 존재했습니다.\
최고 주문건수를 기록한 달은 07이고 총 43826 건의 주문건수가 존재했습니다.\
최저 확진자수를 기록한 달은 06이고 총 7 건의 주문건수가 존재했습니다.\
최고 확진자수를 기록한 달은 07이고 총 1834 건의 주문건수가 존재했습니다.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "대구광역시",
        "location2": None,
        "latitude": 35.87222,
        "longitude": 128.60250,
        "graph1": "/statics/graph/delivery_corona/daegu_delivery_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "최저 주문건수를 기록한 달은 04이고 총 7461 건의 주문건수가 존재했습니다.\
최고 주문건수를 기록한 달은 12이고 총 21805 건의 주문건수가 존재했습니다.\
최저 확진자수를 기록한 달은 06이고 총 23 건의 주문건수가 존재했습니다.\
최고 확진자수를 기록한 달은 03이고 총 4448 건의 주문건수가 존재했습니다.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "인천광역시",
        "location2": None,
        "latitude": 37.45639,
        "longitude": 126.70528,
        "graph1": "/statics/graph/delivery_corona/incheon_delivery_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "최저 주문건수를 기록한 달은 08이고 총 1525 건의 주문건수가 존재했습니다.\
최고 주문건수를 기록한 달은 07이고 총 35118 건의 주문건수가 존재했습니다.\
최저 확진자수를 기록한 달은 04이고 총 29 건의 주문건수가 존재했습니다.\
최고 확진자수를 기록한 달은 07이고 총 2094 건의 주문건수가 존재했습니다.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "광주광역시",
        "location2": None,
        "latitude": 35.15972,
        "longitude": 126.85306,
        "graph1": "/statics/graph/delivery_corona/gwangju_delivery_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "최저 주문건수를 기록한 달은 07이고 총 384 건의 주문건수가 존재했습니다.\
최고 주문건수를 기록한 달은 12이고 총 14550 건의 주문건수가 존재했습니다.\
최저 확진자수를 기록한 달은 05이고 총 2 건의 주문건수가 존재했습니다.\
최고 확진자수를 기록한 달은 01이고 총 702 건의 주문건수가 존재했습니다.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "대전광역시",
        "location2": None,
        "latitude": 36.35111,
        "longitude": 127.38500,
        "graph1": "/statics/graph/delivery_corona/daejeon_delivery_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "최저 주문건수를 기록한 달은 07이고 총 75 건의 주문건수가 존재했습니다.\
최고 주문건수를 기록한 달은 06이고 총 17222 건의 주문건수가 존재했습니다.\
최저 확진자수를 기록한 달은 04이고 총 4 건의 주문건수가 존재했습니다.\
최고 확진자수를 기록한 달은 07이고 총 715 건의 주문건수가 존재했습니다.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "울산광역시",
        "location2": None,
        "latitude": 35.53889,
        "longitude": 129.31667,
        "graph1": "/statics/graph/delivery_corona/ulsan_delivery_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "최저 주문건수를 기록한 달은 11이고 총 1 건의 주문건수가 존재했습니다.\
최고 주문건수를 기록한 달은 02이고 총 15581 건의 주문건수가 존재했습니다.\
최저 확진자수를 기록한 달은 06이고 총 2 건의 주문건수가 존재했습니다.\
최고 확진자수를 기록한 달은 04이고 총 725 건의 주문건수가 존재했습니다.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "세종특별자치시",
        "location2": None,
        "latitude": 36.48750,
        "longitude": 127.28167,
        "graph1": "/statics/graph/delivery_corona/sejong_delivery_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "최저 주문건수를 기록한 달은 09이고 총 85 건의 주문건수가 존재했습니다.\
최고 주문건수를 기록한 달은 08이고 총 757 건의 주문건수가 존재했습니다 \
최저 확진자수를 기록한 달은 04이고 총 0 건의 주문건수가 존재했습니다.\
최고 확진자수를 기록한 달은 03이고 총 45 건의 주문건수가 존재했습니다.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "경기도",
        "location2": None,
        "latitude": 37.586432,
        "longitude": 127.046277,
        "graph1": "/statics/graph/delivery_corona/gyeongi_delivery_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "최저 주문건수를 기록한 달은 09이고 총 265354 건의 주문건수가 존재했습니다.\
최고 주문건수를 기록한 달은 12이고 총 868207 건의 주문건수가 존재했습니다.\
최저 확진자수를 기록한 달은 05이고 총 161 건의 주문건수가 존재했습니다.\
최고 확진자수를 기록한 달은 07이고 총 10873 건의 주문건수가 존재했습니다.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "강원도",
        "location2": None,
        "latitude": 37.8304115,
        "longitude": 128.2260705,
        "graph1": "/statics/graph/delivery_corona/gangwon_delivery_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "최저 주문건수를 기록한 달은 01이고 총 2003 건의 주문건수가 존재했습니다.\
최고 주문건수를 기록한 달은 08이고 총 7794 건의 주문건수가 존재했습니다.\
최저 확진자수를 기록한 달은 05이고 총 4 건의 주문건수가 존재했습니다.\
최고 확진자수를 기록한 달은 07이고 총 838 건의 주문건수가 존재했습니다.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "충청북도",
        "location2": None,
        "latitude": 36.635684,
        "longitude": 127.49139,
        "graph1": "/statics/graph/delivery_corona/choongbuk_delivery_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "최저 주문건수를 기록한 달은 09이고 총 10646 건의 주문건수가 존재했습니다.\
최고 주문건수를 기록한 달은 08이고 총 27619 건의 주문건수가 존재했습니다.\
최저 확진자수를 기록한 달은 04이고 총 1 건의 주문건수가 존재했습니다.\
최고 확진자수를 기록한 달은 12이고 총 836 건의 주문건수가 존재했습니다.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "충청남도",
        "location2": None,
        "latitude": 36.658827,
        "longitude": 126.672835,
        "graph1": "/statics/graph/delivery_corona/choongnam_delivery_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "최저 주문건수를 기록한 달은 08이고 총 11376 건의 주문건수가 존재했습니다.\
최고 주문건수를 기록한 달은 12이고 총 93606 건의 주문건수가 존재했습니다.\
최저 확진자수를 기록한 달은 05이고 총 3 건의 주문건수가 존재했습니다.\
최고 확진자수를 기록한 달은 07이고 총 1063 건의 주문건수가 존재했습니다.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "전라북도",
        "location2": None,
        "latitude": 35.8242238,
        "longitude": 127.1479532,
        "graph1": "/statics/graph/delivery_corona/jeonbuk_delivery_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "최저 주문건수를 기록한 달은 04이고 총 2822 건의 주문건수가 존재했습니다.\
최고 주문건수를 기록한 달은 08이고 총 50746 건의 주문건수가 존재했습니다.\
최저 확진자수를 기록한 달은 05이고 총 3 건의 주문건수가 존재했습니다.\
최고 확진자수를 기록한 달은 12이고 총 503 건의 주문건수가 존재했습니다.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "전라남도",
        "location2": None,
        "latitude": 34.816862,
        "longitude": 126.464532,
        "graph1": "/statics/graph/delivery_corona/jeonnam_delivery_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "최저 주문건수를 기록한 달은 02이고 총 4725 건의 주문건수가 존재했습니다.\
최고 주문건수를 기록한 달은 12이고 총 38485 건의 주문건수가 존재했습니다.\
최저 확진자수를 기록한 달은 05이고 총 4 건의 주문건수가 존재했습니다.\
최고 확진자수를 기록한 달은 05이고 총 410 건의 주문건수가 존재했습니다.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "경상북도",
        "location2": None,
        "latitude": 36.25,
        "longitude": 128.75,
        "graph1": "/statics/graph/delivery_corona/gyeonbuk_delivery_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "최저 주문건수를 기록한 달은 11이고 총 29647 건의 주문건수가 존재했습니다.\
최고 주문건수를 기록한 달은 12이고 총 90072 건의 주문건수가 존재했습니다.\
최저 확진자수를 기록한 달은 06이고 총 10 건의 주문건수가 존재했습니다.\
최고 확진자수를 기록한 달은 03이고 총 812 건의 주문건수가 존재했습니다.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "경상남도",
        "location2": None,
        "latitude": 35.25,
        "longitude": 128.25,
        "graph1": "/statics/graph/delivery_corona/gyeongnam_delivery_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "최저 주문건수를 기록한 달은 04이고 총 11199 건의 주문건수가 존재했습니다.\
최고 주문건수를 기록한 달은 12이고 총 104039 건의 주문건수가 존재했습니다.\
최저 확진자수를 기록한 달은 05이고 총 6 건의 주문건수가 존재했습니다.\
최고 확진자수를 기록한 달은 07이고 총 1810 건의 주문건수가 존재했습니다.",
        "description2": "그래프 설명 2입니다.",
    },
    {
        "location1": "제주특별자치도",
        "location2": None,
        "latitude": 33.376163,
        "longitude": 126.547420,
        "graph1": "/statics/graph/delivery_corona/jaeju_delivery_corona.png",
        "graph2": "/statics/graph/sample_graph.png",
        "description1": "최저 주문건수를 기록한 달은 04이고 총 8579 건의 주문건수가 존재했습니다.\
최고 주문건수를 기록한 달은 12이고 총 28703 건의 주문건수가 존재했습니다.\
최저 확진자수를 기록한 달은 10이고 총 0 건의 주문건수가 존재했습니다.\
최고 확진자수를 기록한 달은 07이고 총 426 건의 주문건수가 존재했습니다.",
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
