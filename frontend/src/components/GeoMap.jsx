import { useMapEvent, GeoJSON, Popup } from "react-leaflet"
import { orderGraphByIdRequest } from "../apis/geodataApi"
import { useState, useRef } from "react"
import { colors } from "../styles/theme"

const GeoMap = ({ changePickedRegion, style, data }) => {
  const mapRef = useRef()
  const [position, setPosition] = useState(null)

  const map = useMapEvent("click", e => {
    setPosition(e.target.getCenter())
    console.log("geomap")
    // setPosition(map.getCenter()) //map의 중심좌표 반환
    map.fitBounds(e.target.getBounds()) //e.target의 경계 좌표 반환 후 모서리에 줌 맞추기
  })

  const onEachRegion = (feature, layer) => {
    const graphTest = async id => {
      const result = await orderGraphByIdRequest(id)
      return result.data
    }

    const handleRegionClick = e => {
      const regionName = feature.properties.CTP_KOR_NM
      const regionID = feature.properties.ID

      mapRef.current.setStyle({
        fillColor: colors.yellow200,
      })

      e.target.setStyle({
        fillColor: colors.black900,
        fillOpacity: 0.5,
      })

      if (typeof changePickedRegion === "function") {
        graphTest(regionID).then(data => {
          changePickedRegion(data)
        })
      }
    }

    const setHover = e => {
      e.target.setStyle({
        fillOpacity: e.type === "mouseover" ? 0.5 : 0.2,
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
      <GeoJSON ref={mapRef} style={style} data={data} onEachFeature={onEachRegion}></GeoJSON>
      {position === null ? null : <Popup position={position}>You are here</Popup>}
    </>
  )
}

export default GeoMap
