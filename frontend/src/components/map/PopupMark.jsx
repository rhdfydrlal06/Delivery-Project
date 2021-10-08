import { Popup } from "react-leaflet"

const PopupMark = ({ name, position }) => {
  const text = `you clicked ${name}`
  return <Popup position={position}>{text}</Popup>
}

export default PopupMark
