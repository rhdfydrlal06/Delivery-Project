import React, { useEffect } from "react"
import L from "leaflet"

const CustomMap = () => {
  // Create our map tile layer:
  const MAP_TILE = L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  })

  // Define the styles that are to be passed to the map instance:
  const mapStyles = {
    overflow: "hidden",
    width: "100%",
    height: "100%",
  }

  // Define an object literal with params that will be passed to the map:
  const mapParams = {
    center: [36.38, 127.51],
    zoom: 6.5,
    zoomControl: false,
    maxBounds: L.latLngBounds(L.latLng(-150, -240), L.latLng(150, 240)),
    layers: [MAP_TILE],
  }

  // This useEffect hook runs when the component is first mounted,
  // similar to componentDidMount() lifecycle method of class-based
  // components:
  useEffect(() => {
    const map = L.map("map", mapParams)
  }, [])

  return <div id="map" style={mapStyles} />
}

export default CustomMap
