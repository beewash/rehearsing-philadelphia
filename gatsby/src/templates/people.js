import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout/Layout'
import PageBuilder from '../components/pageBuilder'

export const query = graphql`
  query PeopleTemplateQuery($id: String!) {
    page: sanityPeople(id: {eq: $id}) {
      id
      ...PeopleBuilder
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

  console.log('page: ', page);

  return (
    <Layout>
      <div className="">
        <PageBuilder pageBuilder={pageBuilder} _rawPageBuilder={_rawPageBuilder} />
      </div>
    </Layout>
  )
}

export default PageTemplate