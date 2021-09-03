import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout/Layout'
import PageBuilder from '../components/pageBuilder'

export const query = graphql`
  query PeopleTemplateQuery($id: String!) {
    people: sanityPeople(id: {eq: $id}) {
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
  const people = data && data.people
  const {pageBuilder, _rawPageBuilder} = people

  console.log('people: ', people);

  return (
    <Layout>
      <div className="">
        <PageBuilder pageBuilder={pageBuilder} _rawPageBuilder={_rawPageBuilder} />
      </div>
    </Layout>
  )
}

export default PageTemplate