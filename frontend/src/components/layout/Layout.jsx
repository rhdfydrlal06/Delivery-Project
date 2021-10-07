import Menu from "./Menu"
import Header from "./Header"
import Map from "../Map"
import { WholeContainer, MenuBox, MapBox } from "../../styles/container"

const Layout = props => {
  return (
    <WholeContainer>
      <Header />
      <MenuBox>
        <Menu />
      </MenuBox>
      <main>{props.children}</main>
      <MapBox>
        <Map changePickedRegion={props.changePickedRegion} mapFeatures={props.mapFeatures} />
      </MapBox>
    </WholeContainer>
  )
}

export default Layout
