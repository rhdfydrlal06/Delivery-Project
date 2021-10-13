// 분석 결과가 나올 스켈레톤 페이지 입니다. 타이틀이나 이미지, 설명 글 등 변수는 인자로 받아서 처리하게 할 예정입니다.
// 일단은 그냥 코드를 복사해서 내용물만 바꿔 사용해주세요!

import ShowMainData from "../../data/show_data_nivo/show_main_data"
import { ContentsBox } from "../../styles/container"
import styled from "styled-components"
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

  console.log(data.raw_data)

  return (
    <ContentsBox>
      <MenuName>배달 데이터 분석</MenuName>
      <MainTitle>{data.location1} 월별 확진자 수와 배달 주문건수 비교</MainTitle>
      <GraphBox>
        <p
          style={{
            width: "80%",
            margin: "0 auto",
          }}
        >
        {/* nivo 라이브러리 시각화 그래프 컴포넌트 - 한빈 */}
        <ShowMainData/>
        </p>
      </GraphBox>
      {useButton && <ButtonBox></ButtonBox>}
      <DescBox>
        <p>{data.description}</p>
      </DescBox>
    </ContentsBox>
  )
}

export default AnalysisContents
