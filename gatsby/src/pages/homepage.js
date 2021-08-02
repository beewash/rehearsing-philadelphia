// import React from 'react'
// import {graphql} from 'gatsby'
// import Layout from '../components/Layout/Layout'
// import PageBuilder from '../components/pageBuilder'

// export const query = graphql`
//   query HomePageQuery($id: String!) {
//     page: sanityHomePage(id: {eq: $id}) {
//       _id
//       ...HomePageBuilder
//       title
//       slug {
//         current
//       }
//     }
//   }
// `

// const Homepage = props => {
//   const {data} = props
//   const page = data && data.page
//   const {pageBuilder, _rawPageBuilder} = page

//   return (
//     <div>Homepage</div>
//     <Layout>
//       <PageBuilder pageBuilder={pageBuilder} _rawPageBuilder={_rawPageBuilder} />
//     </Layout>
//   )
// }

// export default Homepage