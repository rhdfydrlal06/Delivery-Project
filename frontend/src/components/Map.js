import { useEffect, useState, useRef } from "react"
import { MapContainer, GeoJSON } from "react-leaflet"
import mapJSON from "../data/korea_region.json"
import "leaflet/dist/leaflet.css"
import { geodataListRequest, storesGraphByIdRequest, orderGraphByIdRequest } from "../apis/geodataApi"

const mapStyle = {
  height: "100%",
  backgroundColor: "white",
}

// 추후 작업 예정
const regionStyle = {}

const Map = () => {
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
      const result = await storesGraphByIdRequest(id)
      alert(JSON.stringify(result))
    }

    const handleRegionClick = e => {
      const regionName = feature.properties.CTP_KOR_NM
      const regionID = feature.properties.ID
      console.log("click", regionName)
      console.log("click", regionID)

      mapRef.current.setStyle({
        fillColor: "#3388ff",
      })

      e.target.setStyle({
        fillColor: "#ff0000",
      })

      graphTest(regionID)
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
      <MapContainer style={mapStyle} center={[36, 127.51]} zoom={7} scrollWheelZoom={false}>
        <GeoJSON ref={mapRef} style={regionStyle} data={mapData.features} onEachFeature={onEachRegion} />
      </MapContainer>
    </>
  )
}

export default Map
