import { MapContainer, GeoJSON } from "react-leaflet"
import mapData from "../data/korea_region.json"
import "leaflet/dist/leaflet.css"

const mapStyle = {
  height: "100%",
  backgroundColor: "white",
}

// 추후 작업 예정
const regionStyle = {}

const Map = () => {
  const onEachRegion = (feature, layer) => {
    const regionName = feature.properties.CTP_KOR_NM

    const handleRegionClick = e => {
      console.log("click", regionName)
    }

    const setHover = e => {
      e.target.setStyle({
        fillOpacity: e.type == "mouseover" ? 0.5 : 0.2,
      })
    }

    layer.on({
      click: handleRegionClick,
      mouseover: setHover,
      mouseout: setHover,
    })
  }

  return (
    <>
      <MapContainer style={mapStyle} center={[36.38, 127.51]} zoom={7} scrollWheelZoom={true}>
        <GeoJSON style={regionStyle} data={mapData.features} onEachFeature={onEachRegion} />
      </MapContainer>
    </>
  )
}

export default Map
