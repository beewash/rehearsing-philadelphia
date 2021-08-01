import React from 'react'
import {graphql} from 'gatsby'
// import Layout from '../containers/layout'
// import PageBuilder from '../components/pageBuilder'

// export const query = graphql`
//   query HomePageTemplateQuery($id: String!) {
//     homepage: sanityHomePage(id: {eq: $id}) {
//       id
//       ...HomePageBuilder
//       title
//       slug {
//         current
//       }
//     }
//   }
// `

const Homepage = props => {
  // const {data} = props
  // const homepage = data && data.homepage
  // const {pageBuilder, _rawPageBuilder} = homepage

  return (
    <div>Homepage</div>
    // <Layout>
    //   <PageBuilder pageBuilder={pageBuilder} _rawPageBuilder={_rawPageBuilder} />
    // </Layout>
  )
}

export default Homepage