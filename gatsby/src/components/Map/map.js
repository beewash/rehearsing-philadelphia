import React, {useRef, useState} from 'react'
import { Link } from 'gatsby'
import Modal from '../Modal/modal'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Control from 'react-leaflet-custom-control'
import MarkerList from './markerList'
import PointLayer from './pointLayer'
import LiveFilter from './liveFilter'
import ModuleButton from './moduleButtons'
import locations from './locations.json'
import { control } from './leafletStyles'

// Map Component
function MapCompTest() {
  const modalRef1 = useRef()

  // Set state of selected market list item
  const [selected, setSelected] = useState()

  const [mapPoints, setMapPoints] = useState(locations)

  // Handle marker list item click
  function handleItemClick(index) {
    setSelected(index);
  }

  // Filter marker list and point layer based on timestamp
  const liveFilter = () => {

    const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
    const yyyy = today.getFullYear()
    const hour = today.getHours()

    const currentDate = mm + '/' + dd + '/' + yyyy;

    // const liveEvent = validEvent.filter(event => eventDate == currentDate && hour >= startTime && hour <= endTime)

    const filteredLocations = locations.filter(locations => {
      return locations.properties.eventDetails?.some((event) => {
        if (event.date !== currentDate) {
          delete event.date
        } else if (event.date == currentDate) {
          return true
        } else return false
      })
    })

    {filteredLocations ? 
      (setMapPoints(filteredLocations)) 
      : (<div>There are no live events currently</div>)}

  }

  // Filter marker list and point layer based on module button
  const moduleFilter = (button) => {

    const soloPoints = locations.filter((location) => location.properties.module == 'Solo')
    const duetPoints = locations.filter((location) => location.properties.module === 'Duet' || location.properties.moduleListName === 'Duet')
    const ensemblePoints = locations.filter((location) => location.properties.module == 'Ensemble')
    const orchestraPoints = locations.filter((location) => location.properties.module == 'Orchestra')
    const communityPoints = locations.filter((location) => location.properties.module == 'artist neighborhoods')
    
    if (button == 'solo') {
      return (
        setMapPoints(soloPoints)
      )
    } else if (button == 'duet') {
      return (
        setMapPoints(duetPoints)
      )
    } else if (button == 'ensemble') {
      return (
        setMapPoints(ensemblePoints)
      )
    } else if (button == 'orchestra') {
      return (
        setMapPoints(orchestraPoints)
      )
    } else if (button == 'community') {
      return (
        setMapPoints(communityPoints)
      )
    } else {
      return (setMapPoints(locations))
    }
  }

  // const soloOptions = { fillColor: '#FFC20E' }
  const duetOptions = { color: 'rgba(0, 0, 0, 0.5)' }
  // const ensembleOptions = { color: '#000F9F' }
  // const orchestraOptions = { color: '#009245' }

  const location = [39.9526, -75.1652]
  const zoom = 14

  return (
    <section id="mapComponent" className="w-full mt-10 relative">
      <div className="flex flex-col md:flex-row px-4 pb-4 space-y-4 md:space-x-4 md:space-y-0">
        <div className="w-full md:w-1/3 min-h-[650px] h-m-174 flex flex-col border-2 border-black rounded-lg">
          <div className="h-1/2 p-4 overflow-hidden flex flex-col space-y-4">
            <div className="flex-grow">
              <div className="mb-6">
                <p className="text-4xl md:text-6xl">Locations</p>
              </div>
              <p className="text-base line-clamp-3">Addressing the question “What can be the space today for coming together?” the four modules of the project intersect conceptually within the city-space of Philadelphia: Solo and Duet spanning across the entire city, each with a different focus on private and public spaces; Ensemble existing as both a seminar and durational exhibition in three discrete locations; and Orchestra culminating in one large, open gathering place. This use of space is designed to symbolically activate the city and then gather it together. Take a peek into some of the locations on the map below. All locations to be announced January 2022.</p>
              <button className="p-1 px-2 mt-4 uppercase font-acuminPro text-xs border-2 border-black rounded-full hover:text-white hover:bg-black" onClick={() => modalRef1.current.openModal()}>Read More</button>
              <Modal ref={modalRef1}>
                <p className="text-base">Addressing the question “What can be the space today for coming together?” the four modules of the project intersect conceptually within the city-space of Philadelphia: Solo and Duet spanning across the entire city, each with a different focus on private and public spaces; Ensemble existing as both a seminar and durational exhibition in three discrete locations; and Orchestra culminating in one large, open gathering place. This use of space is designed to symbolically activate the city and then gather it together. Take a peek into some of the locations on the map below. All locations to be announced January 2022.</p>
              </Modal>
            </div>
            <div className="mb-2 max-w-xl">
              <ModuleButton filter={moduleFilter} />
            </div>
          </div>
          <div className="h-1/2 p-4 border-t-2 border-black overflow-y-scroll">
            {mapPoints.length == 0 ? (
              <div className="space-y-4">
              <div>There are currently no events in progress.</div>
              <div>Check the <Link to="/schedule-and-tickets" className="underline">schedule</Link> for the full list of events.</div>
            </div>
            ) : (
              <MarkerList data={mapPoints} onItemClick={handleItemClick} /> 
            ) }
          </div>
        </div>
        <div className="w-full md:w-2/3 h-m-174">
          <div id="map" className="w-full h-full">
            {(typeof window !== 'undefined') ? (
            <MapContainer id="mapEl" center={location} zoom={zoom} scrollWheelZoom={false} className="z-10 h-m-174 min-h-[650px] rounded-lg">
              <TileLayer 
                url="https://api.mapbox.com/styles/v1/gentry19/ckst13rdw3r9q17nkjcoagb88/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2VudHJ5MTkiLCJhIjoiY2tzcWg4ZmxuMGNzNDJ1bzVuZTJpNWl4byJ9.Dbjod75IraKTOV48WuQjNQ" 
                attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>" 
              />
              <PointLayer data={mapPoints} selectedIndex={selected} />
              <Control position="topright" style={control}>
                <LiveFilter filter={liveFilter} />
              </Control>
              {/*<GeoJSON data={baltimore_ave_route} key="baltimore_ave_route" pathOptions={duetOptions}>
                <Tooltip sticky>Baltimore Ave between 40th and 50th</Tooltip>
              </GeoJSON>
               <GeoJSON data={washington_sq_route} key="washington_sq_route" pathOptions={duetOptions}>
                <Tooltip sticky>Perimeter of Independence Historic Park</Tooltip>
              </GeoJSON>
              <GeoJSON data={lovepark_route} key="lovepark_route" pathOptions={duetOptions}>
                <Tooltip sticky>City Hall to the PMA along the Parkway</Tooltip>
              </GeoJSON> */}
            </MapContainer>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapCompTest