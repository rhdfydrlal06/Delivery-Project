# 딜리버리 푸드 파이터
- **프로젝트 주제** : 코로나 전/후 확진자 및 배달주문건수 비교 및 조회, 게시판서비스를 목표로하는 **팀 프로젝트**  
- 개발 과정 바로가기: https://www.notion.so/hawaiiangomdolhee/Elice-Delivery-Project-c2091e47fecc40e6b70852332a644f95

## 1. 사용한 기술  

  - **프론트엔드 : React** 
    - 지도 : "leaflet", "react-leaflet"
    - 로그인 : "jwt-decode"
    - 웹 디자인 : "recoil", "@mui/material"
    - 데이터 시각화 : "nivo"
  - **백엔드 : Flask**
    - api 응답 : "json"
    - 데이터 분석 : "pandas"
    - 업로드 이미지 저장 : "boto3"
    - 로그인 : "PyJWT"
  - **데이터베이스 : MySQL**
  - **배포 : Docker (gunicorn, greenlet)**  

## 2. 프로젝트 목표

  - 코로나 확산으로 인해 사람들의 생활이 많이 바뀌었다. 우리팀은 사람들의 식생활도 이에따라 많이 바뀌었을거라 생각했다. 코로나에 대한 사람들의 두려움으로 밖에 직접 나가서 여러 사람들이랑 외식을 하는 것은 꺼리게 되고, 오히려 집에서 직접 요리를 해먹거나 배달을 더 시켜먹지 않을까라는 생각을 했다.  

- 따라서 이러한 생각을 직접 데이터 분석을 통해 입증하고, 사용자에게 그 데이터 분석 결과를 이해하기 쉽게 보여주어 사용자가 코로나 이후의 배달 서비스 시장의 변화를 한눈에 파악할 수 있도록 하고 싶었다.  
- 이에 코로나 전/후 확진자 및 배달 주문건수 비교 서비스를 우리 팀의 주요 목표로 했다.
- 서브 목표로는 사용자의 음식점 방문 건수와 배달 주문 건수를 연도별로 비교 하도록 한다.  
- 추가적으로 사용자의 관심도를 높이기 위해 자신이 먹은 음식들을 게시판에 게시하는 서비스를 구현하도록 한다.

## 3. 프로젝트 기능 설명

**데이터 분석**

- 2020년 2월 ~ 2021년 9월 말까지의 국내 지역별 (서울 부산 대구 등) 확진자 데이터와 국내 지역별, 시간별로 주문 건수를 기록한 데이터를 비교 분석하여, 그 결과와 시각화 그래프를 띄운다.
-  국내 지역별, 시간별로 주문 건수를 기록한 데이터와 1일 평균 방문 고객 및 배달 테이크아웃 수 데이터를 비교 분석하여 그 결과와 시각화 그래프를 띄운다.  
- 사용자의 로그 데이터를 DB에 저장하고, 이를 분석해 프론트에서 시각화한다.  

**지도기능 구현**

- 사용자가 지역을 클릭시 이를 프론트에서 인식해서 해당 지역에 할당된 데이터분석 결과를 불러온다.  
- 사용자가 지역을 클릭시 해당 지역이 클릭된 표시된 상태를 색깔로 표시한다.

**게시판 기능 구현**

- 사용자가 자신이 먹은 음식, 텍스트, 지역, 음식 종류를 업로드 할 수 있게 한다.
- 해당 게시물들을 그리드로 정렬하여 조회할 수 있도록 한다.
- 게시물을 작성한 사용자는 자신의 게시물을 삭제하거나 수정할 수 있도록 한다.  
- 다른 사용자가 해당 사용자가 올린 게시물을 삭제하거나 수정할 수 없도록 한다.

**로그인, 회원가입, 로그아웃 기능 구현**

- 사용자의 입력한 정보를 바탕으로 회원가입이 가능하도록 한다. (validation 기능을 추가로 구현한다.)
- db에 저장된 정보를 이용해 로그인 기능을 구현한다.  
- 로그아웃 기능을 구현한다.

## 4. 프로젝트 구성도

**홈페이지**

![Imgur](https://imgur.com/fV7Y74n.jpg)

**서비스 소개 페이지**  

![Imgur](https://imgur.com/572LsLt.jpg)

**배달 데이터 분석 페이지**  

![Imgur](https://imgur.com/aiegwr1.jpg)

**로그 데이터 분석 페이지**

![Imgur](https://imgur.com/WbC0wZt.jpg)

**게시판 페이지**  

![Imgur](https://imgur.com/rdjwOYr.jpg)



## 5. 프로젝트 팀원 역할 분담

| 이름 | 담당 주 업무 |
| ---- | ------------ |
| 김나현 | 프론트앤드 |
| 김한빈 | 데이터 시각화 및 기획 |
| 김희재 | 데이터 분석 및 백앤드 서브 |
| 정태윤 | 백앤드 및 배포 |

# 실행방법  

## 프론트엔드 실행하기

1. yarn install / npm install로 라이브러리 설치
2. yarn start / npm run start  

## 백엔드 실행하기

1. backend 폴더안에 있는 requirements.txt로 파이썬 패키지 설치
2. backend/delivery_app 폴더로 이동
3. flask db init
4. flask db migrate
5. flask db upgrade
   - geodata요청에 쓰이는 address 테이블 초기화 하는 방법이 바뀌었습니다.
   - 첫 마이그레이션 이후 가장 상위의 data폴더에 있는 `region_data.sql`파일을 이용해 데이터를 넣어주세요
6. flask run : 개발환경 실행
7. `배포환경 실행` : 환경변수 설정 후 docker-compose 실행
8. `pre-commit 으로 백엔드 코드 포맷팅하기`
   - requirements.txt 설치 -> pre-commit 패키지가 설치됩니다.
   - .pre-commit-config.yaml파일이 있는 backend 폴더에서 `pre-commit install`명령을 실행합니다.
   - 잘 실행이 됬다면 .git/hooks 폴더에 pre-commit이라는 파일이 생깁니다.
   - 이제 commit을 하면 python파일을 검사해 코드를 포맷팅해줍니다.
   - 포맷팅된 파일을 다시 add하고 commit을 하면 됩니다.

# 파일 구성

## /frontend
- src
    - **/apis : api 요청 폴더**
    
        - authApi.js :  로그인, 회원가입, 로그아웃 관련 
    
        - boardApi.js : 게시판 기능 관련 
    
        - geodataApi.js : 지도에서 클릭한 지역의 데이터를 가져오는 기능   
    
        - logdataApi.js : 사용자의 로그데이터를 가져오는 기능
    
    - **/components : 기능별 컴포넌트 폴더**
    
        - **/layout : 페이지 레이아웃 관련 폴더**
    
          ​	Layout.jsx : 레이아웃 메인 컴포넌트
    
          ​	Header.jsx : 페이지 헤더 컴포넌트
    
          ​	Menu.jsx : 페이지 메뉴 컴포넌트 
    
        - **/map : 지도 기능 폴더**  
    
          ​	Map.jsx : 지도 표시 및 클릭시 넘겨받은 props을 GeoMap.jsx로 넘겨주는 기능
    
          ​	GeoMap.jsx : Map.jsx로부터 넘겨받은 props로 지역 클릭 이벤트를 실행 
    
          ​	PopupMark.jsx : 지도 지역 클릭시 마커를 띄워주는 기능
    
        - **/skeleton : 데이터 분석 결과를 불러오는 컴포넌트 코드 폴더**  
    
          ​	AnalysisContents.jsx : 코로나 확진자수-주문건수 데이터 분석 결과 페이지 뼈대  
    
          ​	LogAnalysisContents.jsx : 사용자 로그 데이터 분셕 결과 페이지 뼈대
    
        - AddPost.jsx : 게시판 페이지에서 게시물 추가 뼈대
        - DetailDialog.jsx : 게시물 클릭시 상세 내용 조회 뼈대
        - DetailPostHeader.jsx : 게시물 상세 내용의 헤더  
        - DetailPost.jsx : 게시물 클릭시 상세 내용을 불러오는 기능
        - DropBox.jsx : 작성된 게시물들을 일정 그리드로 나열하는 기능  
        - EditDialog.jsx : 게시판 페이지에서 게시물 수정 기능 뼈대  
        - EditPost.jsx : 게시판 페이지에서 게시물 수정 기능  
        - ErrorToast.jsx : Mui 라이브러리 에러 표시  
        - ImageCard.jsx : 게시판 페이지에서의 이미지 표시 기능  
        - Login.jsx : 로그인 기능  
        - PostDialog.jsx : 게시판 페이지에서 게시물 추가 기능
    
    - **/data : 지역, 업종 등 리스트와 데이터 시각화를 위한 코드 폴더**
    
        - **/show_data_nivo : 데이터 분석 시각화 그래프를 불러오는 코드 폴더**
          - show_intro_data.js : 서비스 소개 페이지 데이터 분석결과 시각화 
          - show_main_data.js : 코로나 확진자수-주문건수 데이터 분석결과 시각화  
        - adress.js : 웹 페이지 이동 관련 URL 코드 
        - category_list.js : 게시판 작성 시 사용자가 입력 가능한 지역의 리스트 코드
        - map_key.js
    
    - **/pages : 페이지 컴포넌트 폴더**
    
        - Board.jsx : 게시판 페이지 컴포넌트  
        - DeliveryNum.jsx : 코로나 확진자수-주문건수 분석 결과 페이지 컴포넌트   
        - Home.jsx : 홈 페이지 컴포넌트  
        - Intro.jsx : 서비스 소개 페이지 컴포넌트  
        - logData.jsx : 로그데이터 분석 페이지 컴포넌트  
        - SetPages.jsx : 페이지 라우터 컴포넌트
        - Signup.jsx : 회원가입 페이지 컴포넌트  
    
    - /recoil : 전역 상태 관리 폴더  
    
        - atom.js : 메뉴 클릭 상태를 표시  
        - user.js : 메뉴 클릭 상태를 표시  
    
    - styles : 스타일 코드 폴더
    
    - utils : 기능별 함수 폴더

## /backend/delivery_app  

**계층적 구조 (database - services - models - apis)**

- **/apis : 들어온 api 요청에 대한 응답을 수행하는 폴더**
  - auth_api.py : 로그인, 회원가입, 로그아웃, 권한 확인 api   
  - board_api.py : 게시판 CRUD 기능 api  
  - geodata_api.py : 코로나 확진자수-주문건수 데이터 분석결과를 응답해주는 api  
  - logdata_api.py : 로그 데이터를 응답해주는 api  
- **/models : db에 들어갈 모델 폴더**
  - address.py : 코로나 확진자수-주문건수 데이터 분석 결과를 저장할 모델  
  - logdata.py : 로그 데이터를 저장할 모델  
  - posts.py : 게시판 정보를 저장할 모델  
  - user.py : 사용자 정보를 저장할 모델
- **/services : db에 접근하는 코드 폴더**
  - address.py
  - board.py
  - logdata.py
  - user.py

**계층 구조 외**

- **/static : 이미지 등 정적인 파일 폴더**
- **/utils : 자주 사용하는 함수 폴더**

