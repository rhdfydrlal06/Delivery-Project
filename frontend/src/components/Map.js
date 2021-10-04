import { MapContainer, GeoJSON } from "react-leaflet"
import mapData from "../data/korea_region.json"
import "leaflet/dist/leaflet.css"

const Map = () => {
  const mapStyle = {
    height: "100%",
    backgroundColor: "white",
  }

  const regionStyle = {}

  const onEachCountry = (feature, layer) => {
    const regionName = feature.properties.CTP_KOR_NM
    layer.on({
      click: e => {
        console.log("click", regionName)
      },
      mouseover: e => {
        e.target.setStyle({
          fillOpacity: 0.5,
        })
      },
      mouseout: e => {
        e.target.setStyle({
          fillOpacity: 0.2,
        })
      },
    })
  }

  return (
    <>
      <MapContainer style={mapStyle} center={[36.38, 127.51]} zoom={7} scrollWheelZoom={true}>
        <GeoJSON style={regionStyle} data={mapData.features} onEachFeature={onEachCountry} />
      </MapContainer>
    </>
  )
}

export default Map
