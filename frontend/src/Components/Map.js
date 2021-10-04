import { MapContainer, TileLayer, Polygon, Marker, useMap, Rectangle } from "react-leaflet"
import seoul from "./area/Seoul"
import region from "./area/makerPosition"
import { map } from "leaflet"
import { useState, useMemo } from "react"

const regionList = Object.values(region)

const innerBoundsSeoul = [
  [37.715133, 126.734086],
  [37.413294, 127.269311],
]

const outerBounds = [
  [38.9, 124.5],
  [33.0, 132.0],
]

const redColor = { color: "red" }
const whiteColor = { color: "white" }

const SetBoundsRectangles = () => {
  const [bounds, setBounds] = useState(outerBounds)
  const map = useMap()

  const innerHandlers = useMemo(
    () => ({
      click() {
        setBounds(innerBoundsSeoul)
        map.fitBounds(innerBoundsSeoul)
      },
    }),
    [map],
  )
  const outerHandlers = useMemo(
    () => ({
      click() {
        setBounds(outerBounds)
        map.fitBounds(outerBounds)
      },
    }),
    [map],
  )

  return (
    <>
      <Rectangle
        bounds={outerBounds}
        eventHandlers={outerHandlers}
        pathOptions={bounds === outerBounds ? redColor : whiteColor}
      />
      <Rectangle
        bounds={innerBoundsSeoul}
        eventHandlers={innerHandlers}
        pathOptions={bounds === innerBoundsSeoul ? redColor : whiteColor}
      />
    </>
  )
}

const Map = () => {
  // 지도 css는 이 곳에 작성해주세요
  const mapStyle = {
    height: "100%",
  }

  const test = [
    [36.38, 127.51],
    [37.38, 127.55],
    [36.48, 126.51],
  ]

  const markers = regionList.map(region => {
    return <Marker position={region} />
  })

  return (
    <>
      <MapContainer style={mapStyle} center={[36.38, 127.51]} zoom={6} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Polygon pathOptions={{ color: "red" }} positions={seoul} /> */}
        {/* <Polygon pathOptions={{ color: "red" }} positions={test} /> */}
        {markers}
        <SetBoundsRectangles />
      </MapContainer>
    </>
  )
}

export default Map
