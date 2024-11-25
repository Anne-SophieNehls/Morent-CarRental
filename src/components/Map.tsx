
import { TileLayer } from 'react-leaflet/TileLayer'
import { MapContainer, Marker, Popup } from 'react-leaflet'


export default function Map(){
    return(
        <MapContainer center={[53.560, 10]} zoom={10} scrollWheelZoom={false} style={{marginLeft: '30px', marginRight: '30px'}}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[53.560, 10]}>
    <Popup>
      Steve's Car location <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    )
}