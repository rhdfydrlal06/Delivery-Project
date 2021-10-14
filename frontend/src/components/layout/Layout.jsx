import Menu from "./Menu"
import Header from "./Header"
import Map from "../map/Map"
import { WholeContainer, MenuBox, MapBox, Main } from "../../styles/container"

import Box from '@mui/material/Box';

const Layout = props => {
  return (
    <WholeContainer>
      <Box sx={{ display: 'flex' }}>
       <Header isMap={props.isMap} />
        <MenuBox>
          <Menu />
        </MenuBox>
      </Box>
      <Main isMap={props.isMap}>{props.children}</Main>
      {props.isMap && (
        <MapBox>
          <Map changePickedRegion={props.changePickedRegion} mapFeatures={props.mapFeatures} />
        </MapBox>
      )}
    </WholeContainer>
  )
}

export default Layout
