import React from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, GeoJSON, LayersControl, LayerGroup, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import solo from './solo.json'
import duet from './duet.json'
import baltimore_ave_route from './baltimore_ave_route.json'
import washington_sq_route from './washington_sq_route.json'
import lovepark_route from './lovepark_route.json'
import orchestra from './orchestra.json'

import soloIcon from '../../images/soloPin.png'
import duetIcon from '../../images/duetPin.png'
import orchestraIcon from '../../images/orchestraPin.png'
import pinShadow from '../../images/pinShadow.png'

function MapComp() {

  // const soloOptions = { fillColor: '#FFC20E' }
  const duetOptions = { color: 'rgba(0, 0, 0, 0.5)' }
  // const ensembleOptions = { color: '#000F9F' }
  // const orchestraOptions = { color: '#009245' }

  const location = [39.9526, -75.1652]
  const zoom = 13

  return (
    <div id="map" className="w-full h-full relative flex justify-center items-center">
      <div className="w-screen h-96 lg:h-screen px-4 pb-4">
        {(typeof window !== 'undefined') ? (
        <MapContainer id="mapEl" center={location} zoom={zoom} scrollWheelZoom={false} className="z-10 w-full h-full relative">
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
                      shadowUrl: pinShadow,
                      iconAnchor: [12, 38],
                      popupAnchor: [1, -37],
                      iconSize: [25, 38],
                      shadowSize: [18, 25],
                      shadowAnchor: [0, 25]
                    })}>
                    <Popup>
                      <div className="mb-2 uppercase font-acuminPro text-solo-yellow">{solo.properties.module}</div>
                      <div className="mb-2 text-sm font-semibold font-sainteColombe">{solo.properties.name}</div>
                      <div className="mb-2 font-sainteColombe">{solo.properties.address}</div>
                      <ol className="mt-3.5 pt-3.5 pl-3.5 list-outside list-decimal font-sainteColombe border-t-2 border-black">
                        {solo.properties.facts.map(fact => (
                          <li className="mb-2.5">{fact.fact}</li>
                        ))}
                      </ol>
                      <div className="mb-2 font-sainteColombe">{solo.properties.question}  <span className="font-semibold">{solo.properties.statement}</span></div>
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
                      shadowUrl: pinShadow,
                      iconAnchor: [12, 38],
                      popupAnchor: [1, -37],
                      iconSize: [25, 38],
                      shadowSize: [18, 25],
                      shadowAnchor: [0, 25]
                    })}>
                    <Popup>
                      <div className="mb-2 uppercase font-acuminPro text-duet-red">{duet.properties.module}</div>
                      <div className="mb-2 text-sm font-semibold font-sainteColombe">{duet.properties.name}</div>
                      <div className="mb-2 font-sainteColombe">{duet.properties.address}</div>
                      <ol className="mt-3.5 pt-3.5 pl-3.5 list-outside list-decimal font-sainteColombe border-t-2 border-black">
                        {duet.properties.facts.map(fact => (
                          <li className="mb-2.5">{fact.fact}</li>
                        ))}
                      </ol>
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
                      shadowUrl: pinShadow,
                      iconAnchor: [12, 38],
                      popupAnchor: [1, -37],
                      iconSize: [25, 38],
                      shadowSize: [18, 25],
                      shadowAnchor: [0, 25]
                    })}>
                  <Popup>
                    <div className="mb-2 uppercase font-acuminPro text-orchestra-green">{orchestra.properties.module}</div>
                    <div className="mb-2 text-sm font-semibold font-sainteColombe">{orchestra.properties.name}</div>
                    <div className="mb-2 font-sainteColombe">{orchestra.properties.address}</div>
                    <ol className="mt-3.5 pt-3.5 pl-3.5 list-outside list-decimal font-sainteColombe border-t-2 border-black">
                    {orchestra.properties.facts.map(fact => (
                      <li className="mb-2.5">{fact.fact}</li>
                    ))}
                    </ol>
                    <div className="mb-2 font-sainteColombe">{orchestra.properties.question}<span className="font-semibold">{orchestra.properties.statement}</span></div>
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
                <GeoJSON data={washington_sq_route} key="washington_sq_route" pathOptions={duetOptions} />
              </LayerGroup>
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="Walk from Love Park to Philadelphia Museum of Art">
              <LayerGroup>
                <GeoJSON data={lovepark_route} key="lovepark_route" pathOptions={duetOptions} />
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