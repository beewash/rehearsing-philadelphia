import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout/Layout'
import PageBuilder from '../components/pageBuilder'
import SEO from '../components/SEO/SEO'

export const query = graphql`
  query PeopleTemplateQuery($id: String!) {
    people: sanityPeople(id: {eq: $id}) {
      id
      ...PeopleBuilder
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

  // console.log('people: ', people);

  return (
    <Layout>
      <SEO title={people.slug.current} />
      <div className="">
        <PageBuilder pageBuilder={pageBuilder} _rawPageBuilder={_rawPageBuilder} />
      </div>
    </Layout>
  )
}

export default PageTemplate