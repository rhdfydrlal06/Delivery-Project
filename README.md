## 프론트엔드 실행하기
1. yarn install / npm install로 라이브러리 설치
2. yarn start / npm run start

## 프론트엔드 파일 구성
- src
    - Compoments
        - CustomMap.js : leaflet라이브러리를 이용한 기본 지도
        - NavBar.js : 상단 메뉴 컴포넌트
        - Greet.js : 테스트용 컴포넌트(삭제 예정)
    - Pages : 페이지를 모아놓은 폴더입니다.
        - SetPages.js : 각 페이지 컴포넌트를 모아놓은 파일
        - Home.js : 서비스 소개가 들어가는 첫 페이지
        - DeliveryNum.js : 코로나확진자수/배달건수 비교 페이지
    - styles : 컴포넌트 스타일을 모아놓은 폴더입니다.

## 백엔드 실행하기
1. backend 폴더안에있는 requirements.txt로 파이썬 패키지 설치
2. backend/delivery_app 폴더로 이동
3. flask db init
4. flask db migrate
5. flask db upgrade
    - geodata요청에 쓰이는 address테이블 초기화 하는 방법이 바뀌었습니다.
    - 첫 마이그레이션 이후 가장 상위의 data폴더에 있는 `region_data.sql`파일을 이용해 데이터를 넣어주세요
6. flask run : 개발환경 실행
7. `배포환경 실행` : 환경변수 설정 후 docker-compose 실행
8. `pre-commit 으로 백엔드 코드 포맷팅하기`
    - requirements.txt 설치 -> pre-commit 패키지가 설치됩니다.
    - .pre-commit-config.yaml파일이 있는 backend 폴더에서 `pre-commit install`명령을 실행합니다.
    - 잘 실행이 됬다면 .git/hooks 폴더에 pre-commit이라는 파일이 생깁니다.
    - 이제 commit을 하면 python파일을 검사해 코드를 포맷팅해줍니다.
    - 포맷팅된 파일을 다시 add하고 commit을 하면 됩니다.

### 요청 url
- `GET localhost:5000/api/geodata/list`
    - 모든 지역에 관한 기본 데이터 반환(id, 이름, 좌표)
- `GET localhost:5000/api/geodata/graph/order-per-time/<id>`
    - id에 해당하는 지역의 데이터, 시간-지역별 주문량 그래프와 설명을 반환
- `GET localhost:5000/api/geodata/graph/stores/<id>`
    - id에 해당하는 지역의 데이터, 배달상점분포 그래프와 설명을 반환
- `<id>는 /api/geodata/list 요청을 통해 얻은 지역들의 id`

### api 문서
- [api문서](https://lumbar-sloth-e92.notion.site/api-c6f79e4c2e4d41b888ebccd34a9450e2)

# (서비스 명)
- 최종 서비스 명을 위 괄호 부분에 작성하세요.
- 최종 서비스의 한 줄 소개를 작성하세요.

