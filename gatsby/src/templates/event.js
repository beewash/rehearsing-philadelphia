import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout/Layout'
import PortableText from '../components/portableText'
import SEO from '../components/SEO/SEO'

export const query = graphql`
  query EventTemplateQuery($id: String!) {
    event: sanityCalendar(id: {eq: $id}) {
      id
      title
      location
      slug {
        current
      }
      summary
      _rawDescription
      date
      month
      time
    }
  }
`

const EventTemplate = props => {
  const {data} = props
  const event = data && data.event

  // console.log('event: ', event);

  return (
    <Layout>
      <SEO title={event.slug.current} />
      <section className="w-screen mb-20 md:mb-48">
        <div className='text-center px-4 mt-16 md:px-8 md:mt-32'>
          <h1>{event.location}</h1>
          <p>{event.date}, {event.time}</p>
        </div>
      </section>
      <section className="eventTemplateContainer max-w-6xl mx-auto px-6 pb-28">
        <PortableText blocks={event._rawDescription} />
      </section>
    </Layout>
  )
}

export default EventTemplate