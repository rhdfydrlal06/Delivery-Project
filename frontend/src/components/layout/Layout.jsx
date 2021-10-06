import Menu from "./Menu"
import Header from "./Header"
import Map from "../Map"
import { WholeContainer, MenuBox, MapBox } from "../../styles/Container"

const Layout = props => {
  return (
    <WholeContainer>
      <Header />
      <MenuBox>
        <Menu />
      </MenuBox>
      <main>{props.children}</main>
      <MapBox>
        <Map />
      </MapBox>
    </WholeContainer>
  )
}

export default Layout
