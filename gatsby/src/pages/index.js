import React from "react"
import { graphql, Link } from "gatsby"
import Container from "../components/Container/Container"
import GraphQLErrorList from "../components/graphql-error-list"
import SEO from "../components/SEO/SEO"
import Layout from "../containers/layout"
import MapComp from "../components/Map/map"
import Helmet from 'react-helmet'
import logo from '../images/Logo_Symbols.png'
import { useInView } from 'react-intersection-observer'
import {motion} from 'framer-motion'

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

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  })

  console.log(entry)

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
  }
  
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
          <div className="mb-8">
            <div className="w-screen mb-20 md:mb-48">
              <div className="w-10/12 mx-auto mt-16 md:mt-32">
                <img src={logo} alt="Rehearsing Philadelphia Logo" />
              </div>
            </div>
            <div className="text-center px-8 mt-12 md:mt-24 lg:w-9/12 mx-auto">
              <div className="mb-32">
                <p>
                  Created by Ari Benjamin Meyers and jointly produced and presented by the Curtis Institute of Music and Drexel University’s Westphal College of Media Arts & Design, this large-scale public project explores how we can come together as a city through musical rehearsal. The traditional musical preparation process focuses on rehearsing as a way to attain perfection, which is then repeated in performance. This is not how we live modern life in a rapidly changing world of social upheaval. The future will be rehearsed, not perfected. Rehearsing Philadelphia re-examines the rehearsal processes which allow people to act together and be empowered to create new realities.
                </p>
              </div>
              <div className="flex-col text-center justify-around space-x-28">
                <button className="inline-flex">
                  <Link to="#map" className="pt-2 pb-1 px-4 font-acuminPro font-medium uppercase text-black text-cfsSM bg-white border-black border-2 rounded-full hover:bg-black hover:text-white">Explore the Map</Link>
                </button>
                <button className="inline-flex">
                  <Link to="/artist-directory" className="pt-2 pb-1 px-4 font-acuminPro font-medium uppercase text-black text-cfsSM bg-white border-black border-2 rounded-full hover:bg-black hover:text-white">Explore the Artists</Link>
                </button>
              </div>
            </div>
          </div>    
          <motion.div
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 2, ease: 'easeOut' }}
            ref={ref}
            className="magic"
          >
            <MapComp />
          </motion.div>
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage
