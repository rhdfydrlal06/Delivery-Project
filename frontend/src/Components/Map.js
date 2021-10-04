import React, { Component } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

class Maps extends Component {
  constructor() {
    super()
    this.state = {
      lat: 36.38,
      lng: 127.51,
      zoom: 6.5,
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng]

    return (
      <>
        <MapContainer style={{ height: "100%" }} center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <span>
                A pretty CSS3 popup. <br /> Easily customizable.
              </span>
            </Popup>
          </Marker>
        </MapContainer>
      </>
    )
  }
}

export default Maps
