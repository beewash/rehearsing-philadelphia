import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Image from "gatsby-image"
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
            socialIcon {
              asset {
                fluid(maxWidth: 800){
                  ...GatsbySanityImageFluid
                }
              }
            }
            socialLink {
              externalContent
              linkUrl
            }
          }
          _rawSponsorText
          sponsorText {
            children {
              text
            }
          }
          sponsorLogos {
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
`;

const Footer = () => (
  <StaticQuery
    query={FOOTER_QUERY}
    render={data => (
      <footer id="footerWrapper" className="w-screen bg-white p-4 border-t-2 border-black">
      {data && data.footernav.edges.map(({node: footernav}) => (
        <div id="footerContainer" className="flex flex-row">
          {/* // Dynamically generate Footer Text here 
          <div>
          {footernav.footerText ? (
            <div>
              {footernav.footerText.map(footerTextBlock => (
                <p>{footerTextBlock.children.text}</p>
              ))}
            </div>
          ) : null}
          </div> */}
          <div id="footerColumnOne" className="w-1/2">
            <div className="">
              <PortableText blocks={footernav._rawFooterText} />
            </div>
          </div>
          <div id="footerColumnTwo" className="w-1/2 flex flex-col">
            <nav role='navigation' id="footerNav" className="flex-grow">
                <>
                  {footernav.footerNavigation ? (
                    <ul role='menubar'>
                      {footernav.footerNavigation.map(footerNav => (
                        <>
                        {footerNav.navItems.map(footerItems => (
                        <li key={footerItems._key}>
                          {footerItems.navItemUrl.externalContent ? (
                            <a href={footerItems.navItemUrl.linkUrl} target='_blank' rel='noopener noreferer'>{footerItems.text}</a>
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
                      <Link to="/app/profile">Artist Portal</Link>
                    </div>
                </>
            </nav>
            <div id="sponsorContainer" className="flex-grow-0">
              <div className="mb-4">
                <PortableText blocks={footernav._rawSponsorText} />
              </div>
              {footernav.sponsorLogos ? (
                <div className="flex space-x-4">
                  {footernav.sponsorLogos.map(logo => (
                    <div className="inline">
                      <Image fluid={logo.asset.fluid} className="object-contain h-12 w-48" />
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
