import { useHistory } from "react-router"
import Map from "../components/Map"
import {
  WholeContainer,
  MainBodyContainer,
  ContentsBoxRight,
  ContentsBoxLeft,
} from "../styles/Container"
import NavBar from "../components/NavBar"
import { MainButton } from "../styles/Buttons"

const DeliveryNum = () => {
  const history = useHistory()

  const handleSubmit = () => {
    history.push("/")
  }

  return (
    <WholeContainer>
      <NavBar />
      <MainBodyContainer>
        <ContentsBoxLeft>
          <h1>전국 코로나 확진자수 대비 배달 건수 비교</h1>
          <p>~~데이터 분석 결과 간단 설명~~</p>
          <MainButton onClick={handleSubmit}>메인 페이지로</MainButton>
        </ContentsBoxLeft>
        <ContentsBoxRight>
          <Map />
        </ContentsBoxRight>
      </MainBodyContainer>
    </WholeContainer>
  )
}

export default DeliveryNum
