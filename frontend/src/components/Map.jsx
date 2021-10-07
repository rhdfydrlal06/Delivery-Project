import { useEffect, useState, useRef, useMemo } from "react"
import {
  MapContainer,
  GeoJSON,
  LayersControl,
  TileLayer,
  useMapEvent,
  Marker,
  Popup,
  useMap,
  setBounds,
} from "react-leaflet"
import mapData from "../data/korea_region.json"
import "leaflet/dist/leaflet.css"
import {
  geodataListRequest,
  storesGraphByIdRequest,
  orderGraphByIdRequest,
} from "../apis/geodataApi"
import { colors } from "../styles/theme"
import { styleId, userId, token } from "../data/map_key"
import GeoMap from "./GeoMap"

const mapStyle = {
  height: "100%",
}

const regionStyle = {
  fillColor: colors.yellow200,
  color: colors.yellow200,
}

const Map = ({ changePickedRegion, mapFeatures }) => {
  const mapRef = useRef()

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

  const LocationMarker = () => {
    const [position, setPosition] = useState(null)
    const map = useMapEvent("click", e => {
      setPosition(e.latlng)
      // setPosition(map.getCenter()) //map의 중심좌표 반환
      map.fitBounds(e.target.getBounds()) //e.target의 경계 좌표 반환 후 모서리에 줌 맞추기
    })

    return position === null ? null : <Popup position={position}>You are here</Popup>
  }

  return (
    <>
      <MapContainer style={mapStyle} center={[36.0, 127.51]} zoom={7} scrollWheelZoom={true}>
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
            <TileLayer
              attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
              url={`https://api.mapbox.com/styles/v1/${userId}/${styleId}/tiles/256/{z}/{x}/{y}@2x?access_token=${token}`}
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay checked name="geoJSON">
            <GeoMap
              // ref={mapRef}
              style={regionStyle}
              data={mapFeatures ? mapFeatures : mapData.features}
              changePickedRegion={changePickedRegion}
              // onEachFeature={onEachRegion}
            />
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </>
  )
}

export default Map
