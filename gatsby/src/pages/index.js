import React from "react"
import { graphql } from "gatsby"
import Container from "../components/Container/Container"
import GraphQLErrorList from "../components/graphql-error-list"
import SEO from "../components/SEO/SEO"
import Layout from "../containers/layout"
import MapComp from "../components/Map/map"
import Helmet from 'react-helmet'

// import L from 'leaflet'
// import 'leaflet/dist/leaflet.css'
// import Map from '../components/Map'
// import { locations } from '../data/locations'

// const LOCATION = {
//   lat: 38.9072,
//   lng: -77.0369
// };
// const CENTER = [LOCATION.lat, LOCATION.lng];
// const DEFAULT_ZOOM = 5;

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings {
      title
      description
      keywords
    }
  }
`

const IndexPage = (props) => {
  const { data, errors } = props
  const site = data && data.site
  // const {pageBuilder, _rawPageBuilder} = site

  console.log('index: ', site);

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  // const site = (data || {}).site

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * @example Here this is and example of being used to zoom in and set a popup on load
   */

  //  function mapEffect({ leafletElement: map } = {}) {
  //   console.log(map)

  //   if ( !map ) return

  //   map.eachLayer((layer) => map.removeLayer(layer))

  //   const tripPoints = createTripPointsGeoJson({ locations })
  //   const tripLines = createTripLinesGeoJson({ locations })

  //   const tripPointsGeoJsonLayers = new L.geoJson(tripPoints, {
  //     pointToLayer: tripStopPointToLayer
  //   })

  //   const tripLinesGeoJsonLayers = new L.geoJson(tripLines)

  //   const bounds = tripPointsGeoJsonLayers.getBounds()

  //   tripPointsGeoJsonLayers.addTo(map)
  //   tripLinesGeoJsonLayers.addTo(map)

  //   map.fitBounds(bounds)
  // }

  // const mapSettings = {
  //   center: CENTER,
  //   defaultBaseMap: 'OpenStreetMap',
  //   zoom: DEFAULT_ZOOM,
  //   mapEffect
  // }

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""
        />
      </Helmet>
      <Layout>
        <SEO
          title={site.title}
          description={site.description}
          keywords={site.keywords}
        />
        <Container>
          <MapComp />
          {/* <Map {...mapSettings} /> */}
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage

// function createTripPointsGeoJson({ locations } = {}) {
//   return {
//     "type": "FeatureCollection",
//     "features": locations.map(({ placename, location = {}, image, date, todo = [] } = {}) => {
//       const { lat, lng } = location;
//       return {
//         "type": "Feature",
//         "properties": {
//           placename,
//           todo,
//           date,
//           image
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [ lng, lat ]
//         }
//       }
//     })
//   }
// }

// /**
//  * tripStopPointToLayer
//  */

// function createTripLinesGeoJson({ locations } = {}) {
//   return {
//     "type": "FeatureCollection",
//     "features": locations.map((stop = {}, index) => {
//       const prevStop = locations[index - 1];

//       if ( !prevStop ) return [];

//       const { placename, location = {}, date, todo = [] } = stop;
//       const { lat, lng } = location;
//       const properties = {
//         placename,
//         todo,
//         date
//       };

//       const { location: prevLocation = {} } = prevStop;
//       const { lat: prevLat, lng: prevLng } = prevLocation;

//       return {
//         type: 'Feature',
//         properties,
//         geometry: {
//           type: 'LineString',
//           coordinates: [
//             [ prevLng, prevLat ],
//             [ lng, lat ]
//           ]
//         }
//       }
//     })
//   }
// }

// /**
//  * tripStopPointToLayer
//  */

// function tripStopPointToLayer( feature = {}, latlng ) {
//   const { properties = {} } = feature;
//   const { placename, todo = [], image, date } = properties;

//   const list = todo.map(what => `<li>${ what }</li>`);
//   let listString = '';
//   let imageString = '';

//   if ( Array.isArray(list) && list.length > 0 ) {
//     listString = list.join('');
//     listString = `
//       <p>Things we will or have done...</p>
//       <ul>${listString}</ul>
//     `
//   }

//   if ( image ) {
//     imageString = `
//       <span class="trip-stop-image" style="background-image: url(${image})">${placename}</span>
//     `;
//   }

//   const text = `
//     <div class="trip-stop">
//       ${ imageString }
//       <div class="trip-stop-content">
//         <h2>${placename}</h2>
//         <p class="trip-stop-date">${date}</p>
//         ${ listString }
//       </div>
//     </div>
//   `;

//   const popup = L.popup({
//     maxWidth: 400
//   }).setContent(text);

//   const layer = L.marker( latlng, {
//     icon: L.divIcon({
//       className: 'icon',
//       html: `<span class="icon-trip-stop"></span>`,
//       iconSize: 20
//     }),
//     riseOnHover: true
//   }).bindPopup(popup);

//   return layer;
// }
