import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout/Layout'
import PageBuilder from '../components/pageBuilder'
import SEO from '../components/SEO/SEO'

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    page: sanityPage(id: {eq: $id}) {
      id
      ...PageBuilder
      title
      slug {
        current
      }
    }
  }
`

const PageTemplate = props => {
  const {data} = props
  const page = data && data.page
  const {pageBuilder, _rawPageBuilder} = page

  // console.log('page: ', page);

  return (
    <Layout>
      <SEO title={page.slug.current} />
      <div className="pageTemplateContainer">
        <PageBuilder pageBuilder={pageBuilder} _rawPageBuilder={_rawPageBuilder} />
      </div>
    </Layout>
  )
}

export default PageTemplate