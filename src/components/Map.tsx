
import { TileLayer } from 'react-leaflet/TileLayer'
import { MapContainer, Marker, Popup } from 'react-leaflet'


export default function Map(){
    return(
        <MapContainer center={[53.560, 10]} zoom={10} scrollWheelZoom={false} style={{marginRight: '1.25rem', borderRadius: '0.75rem', height: '20rem'}}>
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