// 분석 결과가 나올 스켈레톤 페이지 입니다. 타이틀이나 이미지, 설명 글 등 변수는 인자로 받아서 처리하게 할 예정입니다.
// 일단은 그냥 코드를 복사해서 내용물만 바꿔 사용해주세요!

import { ContentsBox } from "../../styles/container"
import styled from "styled-components"
import RegionSelectBox from "../RegionSelectBox"
import { colors } from "../../styles/theme"

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
  width: 100%;
  /* background-color: rgba(0, 0, 0, 0.1); */
  min-height: 30vh;
  margin: 1rem 0;
`

export const ButtonBox = styled.div``

export const DescBox = styled.div`
  margin: 2rem 0;
`

const AnalysisContents = ({ data, useButton = true }) => {
  const imageRootUrl = process.env.REACT_APP_BACKEND_URL
  return (
    <ContentsBox>
      <MenuName>메뉴 타이틀</MenuName>
      <MainTitle>{data.location1} 월별 누적 확진자</MainTitle>
      <GraphBox>
        <p
          style={{
            width: "80%",
            margin: "0 auto",
          }}
        >
          <img
            src={`${imageRootUrl + data.graph}`}
            alt="그래프이미지"
            style={{
              width: "100%",
            }}
          />
        </p>
      </GraphBox>
      {useButton && (
        <ButtonBox>
          <RegionSelectBox />
        </ButtonBox>
      )}
      <DescBox>
        <p>{data.description}</p>
      </DescBox>
    </ContentsBox>
  )
}

export default AnalysisContents
