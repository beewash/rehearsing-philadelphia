import React, {useRef, useEffect} from "react"
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import soloPin from '../../images/soloPin.png'
import duetPin from '../../images/duetPin.png'
import ensemblePin from '../../images/ensemblePin.png'
import orchestraPin from '../../images/orchestraPin.png'
import communityPin from '../../images/communityPin.png'
import pinShadow from '../../images/pinShadow.png'

// Marker popup function
function PointMarker({ icon, position, content, openPopup }) {
  const markerRef = useRef(null);

  useEffect(() => {
    if (openPopup) markerRef.current.openPopup();
  }, [openPopup]);

  return (
    <Marker ref={markerRef} position={position} icon={icon} >
      <Popup className="w-60 md:w-auto">{content}</Popup>
    </Marker>
  );
}

// Map points
function PointLayer({ data, selectedIndex }) {
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

export default PointLayer