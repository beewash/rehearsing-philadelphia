import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Image from "gatsby-image/withIEPolyfill"
import PortableText from '../portableText'

const FOOTER_QUERY = graphql`
  query FooterNav {
    footernav: allSanitySiteSettings(
      filter: {footerNavigation: {elemMatch: {title: {eq: "Footer Nav"}}}}) {
      edges {
        node {
          footerNavigation {
            navItems {
              text
              _key
              navItemUrl {
                linkUrl
                externalContent
              }
            }
          }
          _rawFooterText(resolveReferences: {maxDepth: 10})
          footerText {
            _key
            _type
            children {
              text
            }
          }
          social {
            _key
            linkText
            link {
              externalContent
              linkUrl
            }
            thumbNail {
              asset {
                fluid(maxWidth: 800){
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
          _rawSponsorText
          sponsorText {
            children {
              text
            }
          }
          _rawContactText
          contactText {
            children {
              text
            }
          }
          sponsorLogos {
            linkText
            link {
              externalContent
              linkUrl
            }
            thumbNail {
              asset {
                fluid(maxWidth: 800){
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Footer = () => (
  <StaticQuery
    query={FOOTER_QUERY}
    render={data => (
      <footer id="footerWrapper" className="w-screen bg-white p-4 border-t-2 border-black">
      {data && data.footernav.edges.map(({node: footernav}) => (
        <div id="footerContainer" className="flex flex-col space-y-4 xl:space-y-0 xl:flex-row xl:space-x-4">
          <div id="footerColumnOne" className="flex items-stretch w-full xl:w-1/2">
            <div className="flex flex-col h-full content-between space-y-4">
              <nav role='navigation' id="footerNav" className="flex-grow">
                <>
                  <div id="socialContainer" className="mb-2">
                  {footernav.social ? (
                    <ul className="flex flex-row space-x-4">
                    {footernav.social.map(socialItem => (
                      <li key={socialItem._key}>
                      {socialItem.link.externalContent ? (
                        <a href={socialItem.link.linkUrl} target='_blank' rel="noreferrer">
                          <Image fluid={socialItem.thumbNail.asset.fluid} className="w-5 h-5" />
                        </a>
                      ) : <Link to={`/${socialItem.link.linkUrl}`}>
                            <Image fluid={socialItem.thumbNail.asset.fluid} className="w-5 h-5" />
                          </Link>
                      }
                      </li>
                    ))}
                    </ul>
                  ) : null}
                  </div>
                  {footernav.footerNavigation ? (
                    <ul role='menubar'>
                      {footernav.footerNavigation.map(footerNav => (
                        <>
                        {footerNav.navItems.map(footerItems => (
                        <li key={footerItems._key} className="font-acuminPro font-bold">
                          {footerItems.navItemUrl.externalContent ? (
                            <a href={footerItems.navItemUrl.linkUrl} target='_blank' rel="noreferrer">{footerItems.text}</a>
                          )
                            : <Link to={`/${footerItems.navItemUrl.linkUrl}`}>{footerItems.text}</Link>
                          }
                        </li>
                        ))}
                        </>
                      ))}
                    </ul>
                  ) : null}
                    <div>
                      <Link className="font-acuminPro font-bold" to="/app/profile">Artist Portal</Link>
                    </div>
                </>
              </nav>
              <div className="w-full flex-grow">
                <PortableText blocks={footernav._rawFooterText} />
              </div>
              <div className="w-full flex-none">
                <PortableText blocks={footernav._rawContactText} />
              </div>
            </div>
          </div>
          <div id="footerColumnTwo" className="w-full xl:w-1/2 space-y-4 flex flex-col">
            <div id="sponsorContainer" className="flex-grow-0">
              <div className="mb-4">
                <PortableText blocks={footernav._rawSponsorText} />
              </div>
              {footernav.sponsorLogos ? (
                <div className="space-x-8 flex w-full justify-between">
                  {footernav.sponsorLogos.map(logo => (
                    <a href={logo.link.linkUrl} target="_blank" rel="noreferrer">
                      <Image fluid={logo.thumbNail.asset.fluid} className="w-20 h-20 md:h-48 md:w-48 lg:w-72 object-contain" width="auto" objectFit="contain" />
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ))}
      </footer>
    )}
  />
)

export default Footer