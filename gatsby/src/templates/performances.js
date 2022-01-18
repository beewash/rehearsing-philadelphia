import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../components/Layout/Layout'
import Image from "gatsby-image"
import PortableText from '../components/portableText'

// export const query = graphql`
//   query PerformanceTemplateQuery($id: String!) {
//     performance: sanityPerformances(id: {eq: $id}) {
//       title
//       slug {
//         current
//       }
//       _id
//       credits {
//         personName
//         slug {
//           current
//         }
//       }
//       performanceDate
//       _rawPerformanceDesc(resolveReferences: {maxDepth: 10})
//       performanceDesc {
//         children {
//           text
//         }
//       }
//       performanceType {
//         performanceIcon {
//           alt
//           asset {
//             fluid(maxWidth: 800) {
//               ...GatsbySanityImageFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

// const PerformanceTemplate = props => {
//   const {data} = props
//   const performance = data && data.performance

//   return (
//     <Layout>
//       <div id="performancePage" className="max-w-6xl mt-14 mx-auto px-2.5 pb-28">
//         <div className="mb-10">
//           <Image fluid={performance.performanceType.performanceIcon.asset.fluid} alt={performance.performanceType.performanceIcon.alt} className="object-contain w-24" />
//         </div>
//         <div className="mb-10">
//           <div className="mb-2">
//             <h3>{performance.title}</h3>
//           </div>
//           <div>
//             <PortableText blocks={performance._rawPerformanceDesc} />
//           </div>
//         </div>
//         <div>
//           <div className="mb-4">
//             <h4>Credits</h4>
//           </div>
//           {performance.credits ? (
//             <>
//             {performance.credits.map(name => (
//               <div className="mb-2">
//                 <Link to={`/${name.slug.current}`}>
//                   <p>{name.personName}</p>
//                 </Link>
//               </div>
//             ))}
//             </>
//           ) : <p>N/A</p>}
//           <div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   )
// }

// export default PerformanceTemplate