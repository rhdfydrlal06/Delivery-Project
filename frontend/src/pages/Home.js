import { useHistory } from "react-router"
import Map from "../components/Map"
import { WholeContainer, MapBox, ContentsBox, MenuBox, LogoBox } from "../styles/Container"
import Menu from "../components/Menu"

const Home = () => {
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
        <h1>딜리버리 푸드 파이터</h1>
        <p>
          코로롱으로 꼼짝없이 집에 갇혀버린 우리들! 이럴땐 음식으로 허한 마음을 달래줘야 하죠~
          어느새 우리는 핸드폰을 들고 배달 어플을 키곤 합니다. 몇 년 새에 다양한 배달 어플은
          우리에게 너무나 익숙한 존재가 되어버렸죠!
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

export default Home
