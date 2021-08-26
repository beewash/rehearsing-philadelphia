import React, { useEffect, useState, useRef } from 'react'
import L from 'leaflet'
import { makeKey } from "../../lib/makeKey"
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import locations from './locations.json'
import MapFilter from './filter'
// import locationMarker from '../../images/maps-and-flags.png'

const location = [39.9526, -75.1652]
const zoom = 14

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
      <MapContainer center={location} zoom={zoom} scrollWheelZoom={false} className="z-10 w-full h-full relative">
        <TileLayer 
          url="https://api.mapbox.com/styles/v1/gentry19/ckst13rdw3r9q17nkjcoagb88/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2VudHJ5MTkiLCJhIjoiY2tzcWg4ZmxuMGNzNDJ1bzVuZTJpNWl4byJ9.Dbjod75IraKTOV48WuQjNQ" 
          attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>" 
        />
        <GeoJSON data={locations} key={geoJsonKey} onEachFeature={createPopups} />
        {/* <MapFilter /> */}
      </MapContainer>
    </div>
  )
}

export default MapComp