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
        <div id="footerContainer" className="flex flex-col space-y-10 xl:space-y-0 xl:flex-row xl:space-x-4">
          <div id="footerColumnOne" className="flex items-stretch w-full xl:w-1/2">
            <div className="w-full flex flex-col h-full content-between space-y-4">
              <div className="w-full flex-grow">
                <PortableText blocks={footernav._rawFooterText} />
              </div>
              <div className="w-full flex-none space-y-2">
                <div className="klaviyo-form-YvmeZu w-full lg:w-3/4 mb-6"></div>
                <PortableText blocks={footernav._rawContactText} />
              </div>
            </div>
          </div>
          <div id="footerColumnTwo" className="w-full xl:w-1/2 space-y-4 flex flex-col">
            <nav role='navigation' id="footerNav" className="flex pb-2 center space-x-4">
              <>
                <div id="socialContainer" className="inline-block">
                {footernav.social ? (
                  <ul className="flex flex-row space-x-4">
                  {footernav.social.map(socialItem => (
                    <li key={socialItem._key}>
                    {socialItem.link.externalContent ? (
                      <a href={socialItem.link.linkUrl} className="font-acuminPro font-bold" target='_blank' rel="noreferrer">{socialItem.linkText}</a>
                    ) : <Link to={`/${socialItem.link.linkUrl}`} className="font-acuminPro font-bold">{socialItem.linkText}</Link>
                    }
                    </li>
                  ))}
                  </ul>
                ) : null}
                </div>
                <div id="pagesContainer" className="inline-block">
                {footernav.footerNavigation ? (
                  <ul className="space-x-4">
                    {footernav.footerNavigation.map(footerNav => (
                      <>
                      {footerNav.navItems.map(footerItems => (
                      <li key={footerItems._key} className="inline-block">
                        {footerItems.navItemUrl.externalContent ? (
                          <a href={footerItems.navItemUrl.linkUrl} className="font-acuminPro font-bold" target='_blank' rel="noreferrer">{footerItems.text}</a>
                        )
                          : <Link className="font-acuminPro font-bold" to={`/${footerItems.navItemUrl.linkUrl}`}>{footerItems.text}</Link>
                        }
                      </li>
                      ))}
                      </>
                    ))}
                  </ul>
                ) : null}
                </div>
                <div id="artistPortal" className="inline-block">
                  <Link className="font-acuminPro font-bold" to="/app/profile">Artist Portal</Link>
                </div>
              </>
            </nav>
            <div id="sponsorContainer" className="flex-grow-0">
              <div className="mb-4">
                <PortableText blocks={footernav._rawSponsorText} />
              </div>
              {footernav.sponsorLogos ? (
                <div className="space-x-8 flex w-full justify-between">
                  {footernav.sponsorLogos.map(logo => (
                    <div className="w-1/3 overflow-x-hidden" key={logo.key}>
                      <a href={logo.link.linkUrl} target="_blank" rel="noreferrer">
                        <Image fluid={logo.thumbNail.asset.fluid} className="h-48 object-contain" width="auto" objectFit="contain" />
                      </a>
                    </div>
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