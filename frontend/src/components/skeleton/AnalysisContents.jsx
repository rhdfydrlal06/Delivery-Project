// 분석 결과가 나올 스켈레톤 페이지 입니다. 타이틀이나 이미지, 설명 글 등 변수는 인자로 받아서 처리하게 할 예정입니다.
// 일단은 그냥 코드를 복사해서 내용물만 바꿔 사용해주세요!

import { ContentsBox } from "../../styles/Container"
import styled from "styled-components"
import RegionSelectBox from "../RegionSelectBox"

const MenuName = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  padding-top: 0.5rem;
`

const MainTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
`

const GraphBox = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  min-height: 30vh;
  margin: 1rem 0;
`

const ButtonBox = styled.div``

const DescBox = styled.div`
  margin: 2rem 0;
`

const AnalysisContents = ({ useButton = true }) => {
  return (
    <ContentsBox>
      <MenuName>메뉴 타이틀</MenuName>
      <MainTitle>그래프 타이틀</MainTitle>
      <GraphBox>그래프 이미지</GraphBox>
      {useButton && (
        <ButtonBox>
          <RegionSelectBox />
        </ButtonBox>
      )}
      <DescBox>
        <Text />
      </DescBox>
    </ContentsBox>
  )
}

export default AnalysisContents

const Text = () => {
  return (
    <p>
      이상을 붙잡아 기쁘며, 이성은 싶이 아니더면, 철환하였는가? 주는 때까지 얼마나 과실이 듣는다.
      피에 끓는 석가는 청춘을 천지는 이 있다. 때에, 위하여 것은 안고, 꽃이 듣는다. 피가 희망의
      만물은 이상 인도하겠다는 이는 위하여, 커다란 봄바람이다. 두손을 설산에서 싶이 피다. 실로
      무엇이 인간이 열매를 곳이 교향악이다. 그들의 반짝이는 바이며, 그들에게 뛰노는 청춘은 위하여,
      것이다. 실현에 풀밭에 역사를 타오르고 없으면 몸이 피가 것이다. 이것을 싹이 우리의 있으랴?
      것이다.보라, 이상의 그들은 산야에 실현에 있는 아니다.
      <br />
      <br />
      때까지 이상을 발휘하기 가는 피고 아니한 사막이다. 대한 들어 살 그림자는 이상의 트고,
      봄바람이다. 곳으로 못할 능히 피다. 관현악이며, 커다란 우리 곧 하여도 꽃이 청춘에서만
      노년에게서 수 위하여서. 무엇을 듣기만 굳세게 사람은 불러 이상의 얼음에 황금시대를 돋고,
      말이다. 싹이 바이며, 오아이스도 황금시대다. 청춘 있는 인생을 인생을 끓는 이 힘있다. 청춘은
      관현악이며, 인간의 밥을 무엇을 아니한 인류의 사라지지 봄바람이다. 새 우리는 예수는 무엇을
      사막이다. 노래하며 그들은 목숨이 속에서 이것을 미묘한 이는 아니다.
      <br />
      <br />
      끝에 같이 역사를 목숨이 눈이 눈에 되는 사막이다. 있으며, 할지니, 맺어, 것이다. 낙원을 길지
      영락과 능히 얼마나 우는 이것이다. 현저하게 옷을 얼마나 않는 힘있다. 무엇을 것이 뭇 이상,
      무엇이 되는 많이 그들은 사막이다. 얼마나 못할 충분히 우리 운다. 놀이 것이 관현악이며, 원질이
      꽃 만천하의 그림자는 이것이다. 그들의 꽃이 위하여서 구하지 눈에 않는 그러므로 되려니와, 운다.
      그들은 눈이 든 장식하는 예가 크고 튼튼하며, 뜨거운지라, 싸인 사막이다. 봄바람을 그들을 미인을
      불러 것은 장식하는 따뜻한 바이며, 어디 듣는다.
    </p>
  )
}
