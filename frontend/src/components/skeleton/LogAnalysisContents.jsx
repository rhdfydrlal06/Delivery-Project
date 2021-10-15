import { useState, useEffect } from "react"
import pickLogDataRequest from "../../apis/logdataApi"
import { ContentsBox } from "../../styles/container"
import { MenuName, DescBox, MainTitle } from "./AnalysisContents"
import { Button } from "@mui/material"
import { ResponsiveBar } from '@nivo/bar'
import { Wrapper } from "../../data/show_data_nivo/show_intro_data"
import ShowIntroData from "../../data/show_data_nivo/show_intro_data"

const region = {
  1: "전국",
  2: "서울",
  10: "경기",
  11: "강원",
  12: "충북",
  13: "충남",
  16: "경북",
  17: "경남",
  14: "전북",
  15: "전남",
  5: "인천",
  6: "광주",
  7: "대전",
  4: "대구",
  8: "울산",
  9: "세종",
  3: "부산",
  18: "제주",
}

const FoodLogData = ({foodData}) => {
  const food_raw_data = [
    {
      음식종류: foodData ? foodData[0].restaurant : "",
      클릭로그: foodData ? foodData[0].res_log : ""
    },
    {
      음식종류: foodData ? foodData[1].restaurant : "",
      클릭로그: foodData ? foodData[1].res_log : ""
    },
    {
      음식종류: foodData ? foodData[2].restaurant : "",
      클릭로그: foodData ? foodData[2].res_log : ""
    },
    {
      음식종류: foodData ? foodData[3].restaurant : "",
      클릭로그: foodData ? foodData[3].res_log : ""
    },
    {
      음식종류: foodData ? foodData[4].restaurant : "",
      클릭로그: foodData ? foodData[4].res_log : ""
    },
    {
      음식종류: foodData ? foodData[5].restaurant : "",
      클릭로그: foodData ? foodData[5].res_log : ""
    },
    {
      음식종류: foodData ? foodData[6].restaurant : "",
      클릭로그: foodData ? foodData[6].res_log : ""
    }
  ];

  const theme = {
    axis: {
      textColor: '#eee',
      fontSize: '500px',
      tickColor: '#eee',
    },
    grid: {
      stroke: '#888',
      strokeWidth: 1
    },
  };

  return(
    <div>
        <DescBox>
        {foodData ? foodData[7].text : ""}
        </DescBox>
        <Wrapper>
          <ResponsiveBar
            data={food_raw_data}  
            keys={["클릭로그"]}
            indexBy="음식종류"
            margin={{ top: 60, right: 150, bottom: 100, left: 100 }} 
            valueScale={{type: "linear"}}
            colors={"#FFA500"}
            animate={true}
            enableLabel={false}
            axisTop={null}
            axisRigth={null}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendPosition: "middle",
              legendOffset: -40
            }}
            borderRadius={1}
            borderWidth={2}
            borderColor="#000000"
          ></ResponsiveBar>
        </Wrapper>
        </div>
      )
    }


const TimeLogData = ({timeData}) => {
  const time_raw_data = [
    {
      시간대: timeData ? timeData[0].time + "시": "",
      클릭로그: timeData ? timeData[0].time_log : ""
    },
    {
      시간대: timeData ? timeData[1].time + "시": "",
      클릭로그: timeData ? timeData[1].time_log : ""
    },
    {
      시간대: timeData ? timeData[2].time + "시": "",
      클릭로그: timeData ? timeData[2].time_log : ""
    },
    {
      시간대: timeData ? timeData[3].time + "시": "",
      클릭로그: timeData ? timeData[3].time_log : ""
    },
    {
      시간대: timeData ? timeData[4].time + "시": "",
      클릭로그: timeData ? timeData[4].time_log : ""
    },
    {
      시간대: timeData ? timeData[5].time + "시": "",
      클릭로그: timeData ? timeData[5].time_log : ""
    },
    {
      시간대: timeData ? timeData[6].time + "시": "",
      클릭로그: timeData ? timeData[6].time_log : ""
    },
    {
      시간대: timeData ? timeData[7].time + "시": "",
      클릭로그: timeData ? timeData[7].time_log : ""
    },
    {
      시간대: timeData ? timeData[8].time + "시": "",
      클릭로그: timeData ? timeData[8].time_log : ""
    },
    {
      시간대: timeData ? timeData[9].time + "시": "",
      클릭로그: timeData ? timeData[9].time_log : ""
    },
    {
      시간대: timeData ? timeData[10].time + "시": "",
      클릭로그: timeData ? timeData[10].time_log : ""
    },
    {
      시간대: timeData ? timeData[11].time + "시": "",
      클릭로그: timeData ? timeData[11].time_log : ""
    },
    {
      시간대: timeData ? timeData[12].time + "시": "",
      클릭로그: timeData ? timeData[12].time_log : ""
    },
    {
      시간대: timeData ? timeData[13].time + "시": "",
      클릭로그: timeData ? timeData[13].time_log : ""
    },
    {
      시간대: timeData ? timeData[14].time + "시": "",
      클릭로그: timeData ? timeData[14].time_log : ""
    },
    {
      시간대: timeData ? timeData[15].time + "시": "",
      클릭로그: timeData ? timeData[15].time_log : ""
    },
    {
      시간대: timeData ? timeData[16].time + "시": "",
      클릭로그: timeData ? timeData[16].time_log : ""
    },
    {
      시간대: timeData ? timeData[17].time + "시": "",
      클릭로그: timeData ? timeData[17].time_log : ""
    },
    {
      시간대: timeData ? timeData[18].time + "시": "",
      클릭로그: timeData ? timeData[18].time_log : ""
    },
    {
      시간대: timeData ? timeData[19].time + "시": "",
      클릭로그: timeData ? timeData[19].time_log : ""
    },
    {
      시간대: timeData ? timeData[20].time + "시": "",
      클릭로그: timeData ? timeData[20].time_log : ""
    },
    {
      시간대: timeData ? timeData[21].time + "시": "",
      클릭로그: timeData ? timeData[21].time_log : ""
    },
    {
      시간대: timeData ? timeData[22].time + "시": "",
      클릭로그: timeData ? timeData[22].time_log : ""
    },
    {
      시간대: timeData ? timeData[23].time + "시": "",
      클릭로그: timeData ? timeData[23].time_log : ""
    }
  ];

  const theme = {
    axis: {
      textColor: '#eee',
      fontSize: '500px',
      tickColor: '#eee',
    },
    grid: {
      stroke: '#888',
      strokeWidth: 1
    },
  };

  return(
    <div>
        <DescBox>
        {timeData ? timeData[25].text : ""}
        </DescBox>
        <Wrapper>
          <ResponsiveBar
            data={time_raw_data}  
            keys={["클릭로그"]}
            indexBy="시간대"
            margin={{ top: 60, right: 150, bottom: 100, left: 100 }} 
            valueScale={{type: "linear"}}
            colors={"#FFA500"}
            animate={true}
            enableLabel={false}
            axisTop={null}
            axisRigth={null}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendPosition: "middle",
              legendOffset: -40
            }}
            borderRadius={1}
            borderWidth={2}
            borderColor="#000000"
          ></ResponsiveBar>
        </Wrapper>
    </div>
  )
}

const LogAnalysisContents = () => {
  const [alignment, setAlignment] = useState(1)
  const [foodData, setFoodData] = useState()
  const [timeData, setTimeData] = useState()

  const buttonList = Object.keys(region).map(item => {
    return (
      <Button variant="outlined" onClick={e => handleClick(item)}>
        {region[item]}
      </Button>
    )
  })

  useEffect(() => {
    pickLogDataRequest(alignment).then(data => {
      const fetchData = data
      setFoodData(fetchData.data.food_data)
      setTimeData(fetchData.data.time_data)
    })
  }, [])

  const handleClick = (item) => {
    setAlignment(item)
    pickLogDataRequest(item).then(data => {
      const fetchData = data
      setFoodData(fetchData.data.food_data)
      setTimeData(fetchData.data.time_data)
      console.log(timeData)
    })
  }
  

  return (
    <ContentsBox>
      <MenuName>쩝쩝박사 성향 분석</MenuName>
      <MainTitle>{region[alignment]}의 쩝쩝박사 성향 분석</MainTitle>
      {buttonList}
      <FoodLogData foodData={foodData} />
      <TimeLogData timeData={timeData} />
    </ContentsBox>
  )
}

export default LogAnalysisContents