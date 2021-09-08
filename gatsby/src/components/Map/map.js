import React from 'react'
import L from 'leaflet'
import { makeKey } from "../../lib/makeKey"
import { MapContainer, TileLayer, GeoJSON, LayersControl, LayerGroup, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import solo from './solo.json'
import duet from './duet.json'
import baltimore_ave_route from './baltimore_ave_route.json'
import washington_sq_route from './washington_sq_route.json'
import lovepark_route from './lovepark_route.json'
import orchestra from './orchestra.json'

const location = [39.9526, -75.1652]
const zoom = 14

function MapComp() {

  // // REFS
  // // Initiate refs to the feature group and cluster group
  // const groupRef = useRef()
  // const clusterRef = useRef()

  // // STATE
  // // GeoJson Key to handle updating geojson inside react-leaflet
  // const [geoJsonKey, setGeoJsonKey] = useState("initialKey123abc")

  // //Track which markers are being actively displayed on the map
  // const [displayedMarkers, setDisplayedMarkers] = useState(solo)

  // //Track which markers are visible on the map
  // const [visibleMarkers, setVisibleMarkers] = useState(solo)

  // // FUNCTIONS
  // // Generate a new key to force an update to GeoJson Layer
  // useEffect(() => {
  //   const newKey = makeKey(10)
  //   setGeoJsonKey(newKey)
  // }, [displayedMarkers])

  // delete L.Icon.Default.prototype._getIconUrl;
  // L.Icon.Default.mergeOptions({
  //   iconRetinaUrl: require("../../images/solo.png"),
  //   iconUrl: require("../../images/solo.png")
  // });

  const pointerIcon = new L.Icon({
    iconUrl: require("../../images/solo.png"),
    iconRetinaUrl: require("../../images/solo.png"),
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
    shadowSize: [68, 95],
    shadowAnchor: [20, 92]
  })

  const createPopups = (feature = {}, layer) => {
    const { properties = {} } = feature
    const { name, address, module, description } = properties
    const popup = L.popup()
    const html = `
     <div class="popup-container" style="">
     <ul>
     <li style="margin-bottom:.5rem;font-style:italic;">${module.toString()}</li>
     <li style="margin-bottom:.5rem;text-transform:uppercase"><strong>${name.toString()}</strong></li>
     <li style="margin-bottom:.5rem;">${address.toString()}</li>
     <li>${description.toString()}</li>
     </div>
     `
    popup.setContent(html)
    layer.bindPopup(popup)
  }

  const soloOptions = { fillColor: '#FFC20E' }
  const duetOptions = { color: '#ED1C24' }
  const ensembleOptions = { color: '#000F9F' }
  const orchestraOptions = { color: '#009245' }

  return (
    <div id="map" className="w-full h-screen p-8 relative">
      <MapContainer center={location} zoom={zoom} scrollWheelZoom={false} className="z-10 w-full h-full relative">
        <LayersControl position="topright">
          <TileLayer 
            url="https://api.mapbox.com/styles/v1/gentry19/ckst13rdw3r9q17nkjcoagb88/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2VudHJ5MTkiLCJhIjoiY2tzcWg4ZmxuMGNzNDJ1bzVuZTJpNWl4byJ9.Dbjod75IraKTOV48WuQjNQ" 
            attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>" 
          />
          <LayersControl.Overlay checked name="Solo">
            <LayerGroup>
              {solo.map(solo => (
                <Marker position={[solo.geometry.coordinates.lat, solo.geometry.coordinates.lon]} icon={pointerIcon}>
                  <Popup>
                    <div className="mb-2 italic font-sainteColombe">{solo.properties.module}</div>
                    <div className="mb-2 font-semibold font-acuminPro uppercase">{solo.properties.name}</div>
                    <div className="mb-2 font-sainteColombe">{solo.properties.address}</div>
                    <div className="mb-2 font-sainteColombe">{solo.properties.description}</div>
                  </Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Duet">
            <LayerGroup>
              <GeoJSON data={duet} key="duet" onEachFeature={createPopups} />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Orchestra">
            <LayerGroup>
              <GeoJSON data={orchestra} key="orchestra" onEachFeature={createPopups} />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Baltimore Ave Walk">
            <LayerGroup>
              <GeoJSON data={baltimore_ave_route} key="baltimore_ave_route" onEachFeature={createPopups} pathOptions={duetOptions} />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Washington Square and Olde City Walk">
            <LayerGroup>
              <GeoJSON data={washington_sq_route} key="washington_sq_route" onEachFeature={createPopups} pathOptions={duetOptions} />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Walk from Love Park to Philadelphia Museum of Art">
            <LayerGroup>
              <GeoJSON data={lovepark_route} key="lovepark_route" onEachFeature={createPopups} pathOptions={duetOptions} />
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
      {/* <iframe src="https://www.google.com/maps/d/embed?mid=1FSPWxGN0wsw4IMNu0dK1yoYIxSmp_LVA" width="100%" height="100%"></iframe> */}
    </div>
  )
}

export default MapComp