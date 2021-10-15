// 분석 결과가 나올 스켈레톤 페이지 입니다. 타이틀이나 이미지, 설명 글 등 변수는 인자로 받아서 처리하게 할 예정입니다.
// 일단은 그냥 코드를 복사해서 내용물만 바꿔 사용해주세요!

import React, { useState, useRef, useCallback } from "react"
import ShowIntroData from "../../data/show_data_nivo/show_intro_data"
import { colors } from "../../styles/theme"
import styled from "styled-components"
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'


export const ContentsBox = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  overflow: auto;
  height: 85vh;
  padding-right: 20px;
`

export const MenuName = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  padding-top: 0.5rem;
`

export const MainTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
  span {
    color: ${colors.yellow200};
  }
`

export const GraphBox = styled.div`
  width: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  min-height: 60vh;
  float: left;
`

export const ButtonBox = styled.div``

export const DescBox = styled.div`
  margin: 2rem 0;
`

const LogAnalysisContents = () => {

  const [alignment, setAlignment] = useState(1);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ContentsBox>
      <MenuName>{alignment}의 쩝쩝박사들 성향분석</MenuName>
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
        >
          <ToggleButton value="전국">전국</ToggleButton>
          <ToggleButton value="서울특별시">서울</ToggleButton>
          <ToggleButton value="경기도">경기</ToggleButton>
          <ToggleButton value="강원도">강원</ToggleButton>
          <ToggleButton value="충청북도">충북</ToggleButton>
          <ToggleButton value="충청남도">충남</ToggleButton>
          <ToggleButton value="경상북도">경북</ToggleButton>
          <ToggleButton value="경상남도">경남</ToggleButton>
          <ToggleButton value="전라북도">전북</ToggleButton>
          <ToggleButton value="전라남도">전남</ToggleButton>
          <ToggleButton value="인천광역시">인천</ToggleButton>
          <ToggleButton value="광주광역시">광주</ToggleButton>
          <ToggleButton value="대전광역시">대전</ToggleButton>
          <ToggleButton value="대구광역시">대구</ToggleButton>
          <ToggleButton value="울산광역시">울산</ToggleButton>
          <ToggleButton value="세종특별자치시">세종</ToggleButton>
          <ToggleButton value="부산광역시">부산</ToggleButton>
          <ToggleButton value="제주특별자치도">제주</ToggleButton>
        </ToggleButtonGroup>
          <ShowIntroData/>
      <DescBox>
      </DescBox>
    </ContentsBox>
  )
}

export default LogAnalysisContents
