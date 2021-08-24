import React, { useEffect, useState, useRef } from 'react'
import L from 'leaflet'
import { makeKey } from "../../lib/makeKey"
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import locations from './locations.json'
// import locationMarker from '../../images/maps-and-flags.png'

const location = [39.9526, -75.1652]
const zoom = 14

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

function MapComp() {

  // REFS
  // Initiate refs to the feature group and cluster group
  const groupRef = useRef()
  const clusterRef = useRef()

  // STATE
  // GeoJson Key to handle updating geojson inside react-leaflet
  const [geoJsonKey, setGeoJsonKey] = useState("initialKey123abc")

  //Track which markers are being actively displayed on the map
  const [displayedMarkers, setDisplayedMarkers] = useState(locations)

  //Track which markers are visible on the map
  const [visibleMarkers, setVisibleMarkers] = useState(locations)

  // FUNCTIONS
  // Generate a new key to force an update to GeoJson Layer
  useEffect(() => {
    const newKey = makeKey(10)
    setGeoJsonKey(newKey)
  }, [displayedMarkers])


  const createPopups = (feature = {}, layer) => {
    const { properties = {} } = feature
    const { name, address, module, description } = properties
    const popup = L.popup()
    const html = `
     <div class="popup-container">
     <ul>
     <li><strong>${name.toString()}</strong></li>
     <li>${address.toString()}</li>
     <li>${module.toString()}</li>
     <li>${description.toString()}</li>
     </div>
     `
    popup.setContent(html)
    layer.bindPopup(popup)
  }

  return (
    <div id="map" className="w-full h-screen-80 p-8">
      <MapContainer center={location} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
        <GeoJSON data={locations} key={geoJsonKey} onEachFeature={createPopups} />
      </MapContainer>
    </div>
  )
}

export default MapComp