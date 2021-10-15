import pandas as pd
path = 'C:/Users/gmlwo/Desktop/곰돌희/취뽀/elice/프로젝트/2. 데이터 분석 프로젝트/sample-project/backend/delivery_app/'
geoid_region_dict = {1 : "전국", 2 : "서울", 3 : "부산", 4 : "대구",
                    5 : "인천", 6 : "광주", 7 : "대전", 8 : "울산",
                    9 : "세종", 10 : "경기", 11 : "강원", 12 : "충북",
                    13 : "충남", 14 : "전북", 15 : "전남", 16 : "경북",
                    17 : "경남", 18 : "제주"}
geo_id = 2
food_df = pd.read_csv(path + "static/data/logdata_food.csv")
time_df = pd.read_csv(path + "static/data/logdata_time.csv")
food_df = food_df[(food_df.region == geoid_region_dict[geo_id])]
time_df = time_df[(time_df.region == geoid_region_dict[geo_id])]
time_result = []
time_max = 0
for i in range(len(time_df)):
    if (time_df.iloc[i, 2]) > time_max:
        time_max = time_df.iloc[i, 2]
        best_time = time_df.iloc[i, 1]
    tmp_dict = {"time": int(time_df.iloc[i, 1]),
                "time_log": time_df.iloc[i, 2]}
    time_result.append(tmp_dict)
time_result.append({"text":"{}에서는 {}:00 - {}:59 사이의 유입량이 가장 많았습니다.".format(geoid_region_dict[geo_id], best_time, best_time)})
print(type(time_df.iloc[i, 1]))