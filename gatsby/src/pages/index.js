import React from "react"
import { graphql } from "gatsby"
import Container from "../components/Container/Container"
import GraphQLErrorList from "../components/graphql-error-list"
import SEO from "../components/SEO/SEO"
import Layout from "../containers/layout"
import MapComp from "../components/Map/map"
import Helmet from 'react-helmet'

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
          <MapComp />
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage
