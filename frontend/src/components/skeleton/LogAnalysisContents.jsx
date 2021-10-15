// 분석 결과가 나올 스켈레톤 페이지 입니다. 타이틀이나 이미지, 설명 글 등 변수는 인자로 받아서 처리하게 할 예정입니다.
// 일단은 그냥 코드를 복사해서 내용물만 바꿔 사용해주세요!

import { useState } from "react"
import ShowIntroData from "../../data/show_data_nivo/show_intro_data"
import { ContentsBox } from "../../styles/container"
import { MenuName, DescBox, MainTitle } from "./AnalysisContents"
import { Button } from "@mui/material"

const region = {
  전국: "전국",
  서울특별시: "서울",
  경기도: "경기",
  강원도: "강원",
  충청북도: "충북",
  충청남도: "충남",
  경상북도: "경북",
  경상남도: "경남",
  전라북도: "전북",
  전라남도: "전남",
  인천광역시: "인천",
  광주광역시: "광주",
  대전광역시: "대전",
  대구광역시: "대구",
  울산광역시: "울산",
  세종특별자치시: "세종",
  부산광역시: "부산",
  제주특별자치도: "제주",
}

const LogAnalysisContents = () => {
  const [alignment, setAlignment] = useState("전국")

  const buttonList = Object.keys(region).map(item => {
    return (
      <Button value={item} variant="outlined" onClick={e => setAlignment(item)}>
        {region[item]}
      </Button>
    )
  })

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment)
  }

  return (
    <ContentsBox>
      <MenuName>쩝쩝박사 성향 분석</MenuName>
      <MainTitle>{alignment}의 쩝쩝박사 성향 분석</MainTitle>
      {buttonList}
      <ShowIntroData />
      <DescBox></DescBox>
    </ContentsBox>
  )
}

export default LogAnalysisContents
