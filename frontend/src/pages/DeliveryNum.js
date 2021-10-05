import { useHistory } from "react-router"
import Map from "../components/Map"
import { WholeContainer, MenuBox, ContentsBox, MapBox, LogoBox } from "../styles/Container"
import { MainButton } from "../styles/Buttons"
import Menu from "../components/Menu"

const DeliveryNum = () => {
  const history = useHistory()

  const handleSubmit = () => {
    history.push("/")
  }

  return (
    <WholeContainer>
      <LogoBox onClick={handleSubmit}>
        <img src="/img/delivery_logo.png" alt="logo" height="100%" />
      </LogoBox>
      <MenuBox>
        <Menu />
      </MenuBox>
      <ContentsBox>
        <h1>배달 데이터 분석</h1>
        <p>
          여기에는 그래프이미지 분석 내용 등등이 들어갑니다!
          <br />
          <br />
          내 음식은 왜이렇게 안오지..? 오늘은 뭘 먹어야 하지..? 배달로 편리한 삶을 살아가고 있지만
          가끔은 고민과 의문점이 생기기도 하지 않나요?
          <br />
          <br />
          배달이 일상이 되어버린 우리를 위한 배달 정보 타파 서비스! 딜푸파와 함께 대한민국 배달의
          모든것을 알아보아요~
        </p>
      </ContentsBox>
      <MapBox>
        <Map />
      </MapBox>
    </WholeContainer>
  )
}

export default DeliveryNum
