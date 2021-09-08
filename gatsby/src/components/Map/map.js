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

import soloIcon from '../../images/solo.png'
import duetIcon from '../../images/duet.png'
import orchestraIcon from '../../images/orchestra.png'

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
  
  // const iconSolo = new L.Icon({
  //   iconUrl: soloIcon,
  //   iconRetinaUrl: soloIcon,
  //   iconAnchor: [10, 25],
  //   popupAnchor: [3, -25],
  //   iconSize: [25, 25],
  //   shadowSize: [68, 95],
  //   shadowAnchor: [20, 92]
  // })

  // const iconDuet = new L.Icon({
  //   iconUrl: duetIcon,
  //   iconRetinaUrl: duetIcon,
  //   iconAnchor: [10, 25],
  //   popupAnchor: [3, -25],
  //   iconSize: [25, 25],
  //   shadowSize: [68, 95],
  //   shadowAnchor: [20, 92]
  // })

  // const iconOrchestra = new L.Icon({
  //   iconUrl: orchestraIcon,
  //   iconRetinaUrl: orchestraIcon,
  //   iconAnchor: [25, 25],
  //   popupAnchor: [0, -25],
  //   iconSize: [50, 25],
  //   shadowSize: [68, 95],
  //   shadowAnchor: [20, 92]
  // })

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
  const duetOptions = { color: 'rgba(0, 0, 0, 0.5)' }
  const ensembleOptions = { color: '#000F9F' }
  const orchestraOptions = { color: '#009245' }

  return (
    <div id="map" className="w-full relative">
      <div className="h-20"></div>
      <div className="p-8 h-screen-80">
        {(typeof window !== 'undefined') ? (
        <MapContainer center={location} zoom={zoom} scrollWheelZoom={false} className="z-10 w-full h-full relative">
          <LayersControl position="topright">
            <TileLayer 
              url="https://api.mapbox.com/styles/v1/gentry19/ckst13rdw3r9q17nkjcoagb88/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2VudHJ5MTkiLCJhIjoiY2tzcWg4ZmxuMGNzNDJ1bzVuZTJpNWl4byJ9.Dbjod75IraKTOV48WuQjNQ" 
              attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>" 
            />
            <LayersControl.Overlay checked name="Solo">
              <LayerGroup>
                {solo.map(solo => (
                  <Marker 
                    position={[solo.geometry.coordinates.lat, solo.geometry.coordinates.lon]} 
                    icon={new L.Icon({
                      iconUrl: soloIcon,
                      iconRetinaUrl: soloIcon,
                      iconAnchor: [10, 25],
                      popupAnchor: [3, -25],
                      iconSize: [25, 25],
                      shadowSize: [68, 95],
                      shadowAnchor: [20, 92]
                    })}>
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
                {duet.map(duet => (
                  <Marker 
                    position={[duet.geometry.coordinates.lat, duet.geometry.coordinates.lon]} 
                    icon={new L.Icon({
                      iconUrl: duetIcon,
                      iconRetinaUrl: duetIcon,
                      iconAnchor: [10, 25],
                      popupAnchor: [3, -25],
                      iconSize: [25, 25],
                      shadowSize: [68, 95],
                      shadowAnchor: [20, 92]
                    })}>
                    <Popup>
                      <div className="mb-2 italic font-sainteColombe">{duet.properties.module}</div>
                      <div className="mb-2 font-semibold font-acuminPro uppercase">{duet.properties.name}</div>
                      <div className="mb-2 font-sainteColombe">{duet.properties.address}</div>
                      <div className="mb-2 font-sainteColombe">{duet.properties.description}</div>
                    </Popup>
                  </Marker>
                ))}
              </LayerGroup>
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="Orchestra">
              <LayerGroup>
                {orchestra.map(orchestra => (
                  <Marker 
                    position={[orchestra.geometry.coordinates.lat, orchestra.geometry.coordinates.lon]} 
                    icon={new L.Icon({
                      iconUrl: orchestraIcon,
                      iconRetinaUrl: orchestraIcon,
                      iconAnchor: [25, 25],
                      popupAnchor: [0, -25],
                      iconSize: [50, 25],
                      shadowSize: [68, 95],
                      shadowAnchor: [20, 92]
                    })}>
                  <Popup>
                    <div className="mb-2 italic font-sainteColombe">{orchestra.properties.module}</div>
                    <div className="mb-2 font-semibold font-acuminPro uppercase">{orchestra.properties.name}</div>
                    <div className="mb-2 font-sainteColombe">{orchestra.properties.address}</div>
                    <div className="mb-2 font-sainteColombe">{orchestra.properties.description}</div>
                  </Popup>
                </Marker>
                ))}
              </LayerGroup>
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="Baltimore Ave Walk">
              <LayerGroup>
                <GeoJSON data={baltimore_ave_route} key="baltimore_ave_route" pathOptions={duetOptions} />
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
        ) : null}
      </div>
    </div>
  )
}

export default MapComp