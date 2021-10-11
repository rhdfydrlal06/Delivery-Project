import Menu from "./Menu"
import Header from "./Header"
import Map from "../map/Map"
import { WholeContainer, MenuBox, MapBox } from "../../styles/container"

const NotMapLayout = props => {
  return (
    <WholeContainer>
      <Header />
      <MenuBox>
        <Menu />
      </MenuBox>
      <main>{props.children}</main>
    </WholeContainer>
  )
}

export default NotMapLayout
