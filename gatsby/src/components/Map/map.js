import React, {useRef, useEffect, useState} from 'react'
import Modal from '../Modal/modal'
import L from 'leaflet'
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import locations from './locations.json'
import soloFlatIcon from '../../images/soloFlatIcon.png'
import duetFlatIcon from '../../images/duetFlatIcon.png'
import ensembleFlatIcon from '../../images/ensembleFlatIcon.png'
import orchestraFlatIcon from '../../images/orchestraFlatIcon.png'
import communityFlatIcon from '../../images/communityFlatIcon.png'
import communityPin from '../../images/communityPin.png'
import soloPin from '../../images/soloPin.png'
import duetIcon from '../../images/duetPin.png'
import orchestraPin from '../../images/orchestraPin.png'
import pinShadow from '../../images/pinShadow.png'

// Unordered List of locations
function PointList(props) {
  const { data, onItemClick } = props;
  return (
    <div>
      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
        {data.map((item, index) => (
          <>
            <li
              key={index}
              onClick={e => {
                onItemClick(index);
              }}
              className="cursor-pointer"
            >
              {item.properties.moduleListName ? (
                <div className={`mb-2 uppercase font-acuminPro text-${item.properties.color}`}>{item.properties.moduleListName}</div>
              ) : (
                <div className={`mb-2 uppercase font-acuminPro text-${item.properties.color}`}>{item.properties.module}</div>
              )}
              <p className="mb-1 text-base font-semibold">{item.properties.name}</p>
              {item.properties.address ? (
                <p className="text-xs">{item.properties.address}</p>
              ) : <p className="text-xs">{item.properties.site}</p>}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

// Locations layer
function PointLayer(props) {
  const { data, selectedIndex } = props;

  return data.map((item, index) => (
    <>
    {item.properties.module !== 'artist neighborhoods' && item.properties.module !== 'Duet' ? (
      <>
        <PointMarker
          key={index}
          icon={new L.Icon({
            iconUrl: item.properties.icon,
            iconRetinaUrl: item.properties.icon,
            shadowUrl: pinShadow,
            iconAnchor: [12, 38],
            popupAnchor: [1, -37],
            iconSize: [25, 38],
            shadowSize: [18, 25],
            shadowAnchor: [0, 25]
          })}
          content={
            <>
              {item.properties.moduleListName ? (
                <div className={`mb-2 uppercase font-acuminPro text-${item.properties.color}`}>{item.properties.moduleListName}</div>
              ) : (
                <div className={`mb-2 uppercase font-acuminPro text-${item.properties.color}`}>{item.properties.module}</div>
              )}
              <div className="mb-2 text-sm font-semibold font-sainteColombe">{item.properties.name}</div>
              <div className="mb-2 font-sainteColombe">{item.properties.address}</div>
              {item.properties.facts ? (
                <ol className="mt-3.5 pt-3.5 pl-3.5 list-outside list-decimal font-sainteColombe border-t-2 border-black">
                  {item.properties.facts?.map((fact, index) => (
                    <li key={index} className="mb-2.5">{fact.fact}</li>
                  ))}
                </ol>
              ) : (
                <div className="mt-3.5 mb-2 pt-3.5 font-sainteColombe border-t-2 border-black">{item.properties.description}</div>
              )}
              <div className="mb-2 font-sainteColombe">{item.properties.question}  <span className="font-semibold">{item.properties.statement}</span></div>
            </>
          }
          position={[item.geometry.coordinates.lat, item.geometry.coordinates.lon]} 
          openPopup={selectedIndex === index}
        />
      </>
    ) : item.properties.module == 'artist neighborhoods' ? (
      <>
        <PointMarker
          key={index}
          icon={new L.Icon({
            iconUrl: item.properties.icon,
            iconRetinaUrl: item.properties.icon,
            iconAnchor: [0, 0],
            popupAnchor: [5, -1],
            iconSize: [15, 15],
          })}
          content={
            <>
              <div className={`mb-2 uppercase font-acuminPro text-${item.properties.color}`}>{item.properties.module}</div>
              <div className="mb-2 text-sm font-semibold font-sainteColombe">{item.properties.name}
                {item.properties.zip ? (
                  <span>{` (${item.properties.zip})`}</span>
                ) : null}
              </div>
              {item.properties.site ? (
                <div className="mb-2 font-sainteColombe">{item.properties.site}</div>
              ) : null}
              <div className="mt-3.5 pt-3.5 border-t-2 border-black">
                <div className="mb-2 font-sainteColombe">{item.properties.description}</div>
              </div>
            </>
          }
          position={[item.geometry.coordinates.lat, item.geometry.coordinates.lon]} 
          openPopup={selectedIndex === index}
        />
      </>
    ) : (
      <>
        <PointMarker
          key={index}
          icon={new L.Icon({
            iconUrl: item.properties.icon,
            iconRetinaUrl: item.properties.icon,
            iconAnchor: [0, 0],
            popupAnchor: [5, -1],
            iconSize: [8, 8],
          })}
          content={
            <>
              <div className={`mb-2 uppercase font-acuminPro text-${item.properties.color}`}>{item.properties.module}</div>
              <div className="mb-2 text-sm font-semibold font-sainteColombe">{item.properties.name}
                {item.properties.zip ? (
                  <span>{` (${item.properties.zip})`}</span>
                ) : null}
              </div>
              {item.properties.site ? (
                <div className="mb-2 font-sainteColombe">{item.properties.site}</div>
              ) : null}
              <div className="mt-3.5 pt-3.5 border-t-2 border-black">
                <div className="mb-2 font-sainteColombe">{item.properties.description}</div>
              </div>
            </>
          }
          position={[item.geometry.coordinates.lat, item.geometry.coordinates.lon]} 
          openPopup={selectedIndex === index}
        />
      </>
    )}
    </>
  ));
}

// Locations Popup
function PointMarker(props) {
  const markerRef = useRef(null);
  const { icon, position, content, openPopup } = props;

  useEffect(() => {
    if (openPopup) markerRef.current.openPopup();
  }, [openPopup]);

  return (
    <Marker ref={markerRef} position={position} icon={icon} >
      <Popup className="w-60 md:w-auto">{content}</Popup>
    </Marker>
  );
}

// Map Component
function MapCompTest() {
  const modalRef1 = useRef()

  const [selected, setSelected] = useState()

  function handleItemClick(index) {
    setSelected(index);
  }

  // const soloOptions = { fillColor: '#FFC20E' }
  const duetOptions = { color: 'rgba(0, 0, 0, 0.5)' }
  // const ensembleOptions = { color: '#000F9F' }
  // const orchestraOptions = { color: '#009245' }

  const location = [39.9526, -75.1652]
  const zoom = 14

  return (
    <section id="mapComponent" className="w-full mt-10">
      <div className="flex flex-col md:flex-row px-4 pb-4 space-y-4 md:space-x-4 md:space-y-0">
        <div className="w-full md:w-1/3 min-h-[650px] h-m-174 flex flex-col border-2 border-black rounded-lg">
          <div className="h-1/2 p-4 overflow-hidden flex flex-col space-y-4">
            <div className="flex-grow">
              <div className="mb-6">
                <p className="text-4xl md:text-6xl">Locations!</p>
              </div>
              <p className="text-base line-clamp-3">Addressing the question “What can be the space today for coming together?” the four modules of the project intersect conceptually within the city-space of Philadelphia: Solo and Duet spanning across the entire city, each with a different focus on private and public spaces; Ensemble existing as both a seminar and durational exhibition in three discrete locations; and Orchestra culminating in one large, open gathering place. This use of space is designed to symbolically activate the city and then gather it together. Take a peek into some of the locations on the map below. All locations to be announced January 2022.</p>
              <button className="p-1 px-2 mt-4 uppercase font-acuminPro text-xs border-2 border-black rounded-full hover:text-white hover:bg-black" onClick={() => modalRef1.current.openModal()}>Read More</button>
              <Modal ref={modalRef1}>
                <p className="text-base">Addressing the question “What can be the space today for coming together?” the four modules of the project intersect conceptually within the city-space of Philadelphia: Solo and Duet spanning across the entire city, each with a different focus on private and public spaces; Ensemble existing as both a seminar and durational exhibition in three discrete locations; and Orchestra culminating in one large, open gathering place. This use of space is designed to symbolically activate the city and then gather it together. Take a peek into some of the locations on the map below. All locations to be announced January 2022.</p>
              </Modal>
            </div>
            <div className="mb-2 max-w-xl">
              <ul className="flex flex-row flex-wrap justify-between space-y-2">
                <li className="flex flex-row items-center space-x-2 w-1/2 lg:w-1/3">
                  <img src={soloFlatIcon} className="w-4 h-auto" alt="solo" />
                  <p className="font-acuminPro uppercase text-cfsSM1">Solo</p>
                </li>
                <li className="flex flex-row items-center space-x-2 w-1/2 lg:w-1/3">
                  <img src={duetFlatIcon} className="w-4 h-auto" alt="duet" />
                  <p className="font-acuminPro uppercase text-cfsSM1">Duet</p>
                </li>
                <li className="flex flex-row items-center space-x-2 w-1/2 lg:w-1/3">
                  <img src={ensembleFlatIcon} className="w-4 h-auto" alt="ensemble" />
                  <p className="font-acuminPro uppercase text-cfsSM1">Ensemble</p>
                </li>
                <li className="flex flex-row items-center space-x-2 w-1/2 lg:w-1/3">
                  <img src={orchestraFlatIcon} className="w-4 h-auto" alt="orchestra" />
                  <p className="font-acuminPro uppercase text-cfsSM1">Orchestra</p>
                </li>
                <li className="flex flex-row items-center space-x-2">
                  <img src={communityFlatIcon} className="w-4 h-auto" alt="community" />
                  <p className="font-acuminPro uppercase text-cfsSM1">Artist Neighborhoods</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="h-1/2 p-4 border-t-2 border-black overflow-y-scroll">
            <PointList data={locations} onItemClick={handleItemClick} />
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
              <PointLayer data={locations} selectedIndex={selected} />
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