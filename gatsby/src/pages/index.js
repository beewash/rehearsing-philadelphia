import React from "react"
import { graphql } from "gatsby"
import Container from "../components/Container/Container"
import GraphQLErrorList from "../components/graphql-error-list"
import SEO from "../components/SEO/SEO"
import Layout from "../containers/layout"
import MapComp from "../components/Map/map"
import Helmet from 'react-helmet'
import logo from '../images/Logo_Symbols.png'
import {BsArrowDown} from 'react-icons/bs'

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
          <div className="mb-32">
            <div className="w-screen mb-20 md:mb-48">
              <div className="w-10/12 mx-auto mt-16 md:mt-32">
                <img src={logo} />
              </div>
            </div>
            <div className="text-center px-8 mt-12 md:mt-24 lg:w-9/12 mx-auto">
              <div className="mb-20">
                <p>Created by Ari Benjamin Meyers and jointly produced and presented by the Curtis Institute of Music and Drexel University’s Westphal College of Media Arts & Design, this large-scale public project explores how we can come together as a city through musical rehearsal. The traditional musical preparation process focuses on rehearsing as a way to attain perfection, which is then repeated in performance. This is not how we live modern life in a rapidly changing world of social upheaval. The future will be rehearsed, not perfected. Rehearsing Philadelphia re-examines the rehearsal processes which allow people to act together and be empowered to create new realities.</p>
              </div>
              <div className="flex-col text-center justify-center items-center space-y-4">
                <h4>Continue to the Map</h4>
                <BsArrowDown className="mx-auto w-16 h-20" />
              </div>
            </div>
          </div>
          <MapComp />
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
