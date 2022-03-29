import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Image from 'gatsby-image'
import Container from "../components/Container/Container"
import GraphQLErrorList from "../components/graphql-error-list"
import SEO from "../components/SEO/SEO"
import Layout from "../containers/layout"
import PageBuilder from "../components/pageBuilder"
import MapComp from "../components/Map/map"
import Helmet from 'react-helmet'
import logo from '../images/Logo_Symbols.png'
import { BsChevronDown } from 'react-icons/bs'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings {
      ...IndexBuilder
      title
      description
      keywords
      moduleIcons {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

const IndexPage = (props) => {
  const { data, errors } = props
  const site = data && data.site
  const {pageBuilder, _rawPageBuilder} = site

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
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Helmet>
      <Layout>
        <SEO
          title={site.title}
          description={site.description}
          keywords={site.keywords}
        />
        <Container>
          <div className="my-16 lg:m-0 lg:min-h-screen flex justify-items-center items-center relative">
            <div className="w-screen h-full relative">
              <div className="w-10/12 mx-auto">
                <img src={logo} alt="Rehearsing Philadelphia Logo" />
              </div>
              <div className="w-10/12 mx-auto">
                <p>March 25 - April 10, 2022</p>
                <p>Philadelphia, PA</p>
              </div>
            </div>
            <div className="hidden absolute bottom-[18%] left-0 right-0 w-full lg:flex justify-center">
                <Link to="#about-section" className="hover:animate-bounce">
                  <div className="uppercase font-acuminPro text-sm tracking-wide">Scroll</div>
                  <div className="w-fit mx-auto">
                    <BsChevronDown />
                  </div>
                </Link>
              </div>
          </div>
          <div id="about-section" className="min-h-screen p-4 mb-32 flex flex-col  justify-items-center items-center lg:m-0 lg:flex-row lg:space-x-4">
            <div className="w-full h-full lg:w-1/2 items-stretch">
              <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-4 p-8 md:p-28">
                {site.moduleIcons.map((icon, index) => (
                  <div key={index} className="w-full h-full">
                    <Image fluid={icon.asset.fluid} />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-full lg:w-1/2 text-center --sal-duration:3s --sal-delay:2s">
              <div
                className="w-4/5 mx-auto"
                data-sal="slide-up"
                // data-sal-delay="300"
                data-sal-easing="ease"
              >
                <h2 className="mb-8">About</h2>
                <p>
                  Created by Ari Benjamin Meyers and jointly produced and presented by the Curtis Institute of Music and Drexel University’s Westphal College of Media Arts & Design, this large-scale public project explores how we can come together as a city through musical rehearsal. The traditional musical preparation process focuses on rehearsing as a way to attain perfection, which is then repeated in performance. This is not how we live modern life in a rapidly changing world of social upheaval. The future will be rehearsed, not perfected. Rehearsing Philadelphia re-examines the rehearsal processes which allow people to act together and be empowered to create new realities.
                </p>
              </div>
            </div>
          </div>
          <PageBuilder pageBuilder={pageBuilder} _rawPageBuilder={_rawPageBuilder} />
          <Link to="#map">
            <div aria-hidden="true" className="absolute top-[calc(0px_-_80px)] opacity-0 pointer-events-none" />
          </Link>
          <MapComp />
          <section id="calendarCTA" className="w-full text-center my-28">
            <h3 className="w-fit border-2 border-black rounded-full bg-white hover:bg-black text-black hover:text-white px-8 py-4 mx-auto"><Link to="/schedule-and-tickets">Schedule &amp; Tickets</Link></h3>
          </section>
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage
