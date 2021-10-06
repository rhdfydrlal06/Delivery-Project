import { useEffect, useState, useRef } from "react"
import { MapContainer, GeoJSON, LayersControl, TileLayer } from "react-leaflet"
import mapJSON from "../data/korea_region.json"
import "leaflet/dist/leaflet.css"
import { geodataListRequest, storesGraphByIdRequest, orderGraphByIdRequest } from "../apis/geodataApi"

const mapStyle = {
  height: "100%",
  backgroundColor: "white",
}

// 추후 작업 예정
const regionStyle = {}

const Map = ({ changePickedRegion }) => {
  const [mapData, setMapData] = useState(mapJSON)
  const mapRef = useRef()

  useEffect(() => {
    async function fetchData() {
      const geodata = await geodataListRequest()
      const enrichedMapFeatures = mapData.features.map(element => {
        const geoID = geodata.data.find(d => d.location1 === element.properties.CTP_KOR_NM).id
        element.properties.ID = geoID
        return element
      });
      setMapData(prev => {
        return {
          ...prev,
          features: enrichedMapFeatures
        }
      })
    }
    if (!mapData.features[0].properties.ID) {
      fetchData()
    }
  }, [mapData])

  const onEachRegion = (feature, layer) => {
    const graphTest = async (id) => {
      const result = await orderGraphByIdRequest(id)
      return result.data
    }

    const handleRegionClick = e => {
      const regionName = feature.properties.CTP_KOR_NM
      const regionID = feature.properties.ID

      mapRef.current.setStyle({
        fillColor: "#3388ff",
      })

      e.target.setStyle({
        fillColor: "#ff0000",
      })

      if (typeof changePickedRegion === 'function') {
        graphTest(regionID)
          .then((data) => {
            changePickedRegion(data)
          })
      }
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
      <MapContainer style={mapStyle} center={[36.0, 127.51]} zoom={7} scrollWheelZoom={true}>
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
            <TileLayer
              attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
              url="https://api.mapbox.com/styles/v1/nanna-h/ckue7vpsf0dih17n1hgn2azj3/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibmFubmEtaCIsImEiOiJja3VlNnQ2dW8xaGhoMnNsOWkyeXdjNm1iIn0.zVr2lRidABEHssPKnQkRvw"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay checked name="geoJSON">
            <GeoJSON ref={mapRef} style={regionStyle} data={mapData.features} onEachFeature={onEachRegion} />
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </>
  )
}

export default Map
