import React from "react"
import { Link, graphql, StaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { AiTwotoneFilePdf, AiOutlineLink } from 'react-icons/ai'
import SEO from './SEO/SEO'

const ARTIST_PORTAL_QUERY = graphql`
  query ArtistPortal { 
    artistPortal: allSanityArtistPortal {
      edges {
        node {
          _key
          generalInfo {
            _key
            docName
            externalLink
            externalContent
            document {
              asset {
                url
              }
            }
          }
          portalInfo {
            _key
            moduleName
            icon {
              alt
              asset {
                fluid(maxWidth: 800) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            documents {
              docName
              externalLink
              externalContent
              document {
                asset {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`

const Profile = () => (
    <>
    <SEO title="Artist Portal" />
    <StaticQuery
      query={ARTIST_PORTAL_QUERY}
      render={data => (
        <div className="max-w-6xl mx-auto px-6 pb-28">
          {data && data.artistPortal.edges.map(({node: artistPortal}) => (
            <>
            {artistPortal.generalInfo ? (
              <>
              {artistPortal.generalInfo.map(generalInfo => (
                <div id="generalInfo" className="mb-24">
                  <div className="mb-6">
                    <h3 className="">General Information</h3>
                  </div>
                    <div>
                      <ul className="space-y-4">
                        <li>
                          <div className="flex flex-row space-x-2 items-center justify-items-center">
                          {generalInfo.externalContent ? (
                            <>
                              <AiOutlineLink className="w-7 h-7"/>
                              <a rel="noopener noreferrer" href={generalInfo.externalLink} target="_blank"><p>{generalInfo.docName}</p></a>
                            </>
                          ) : <>
                                <AiTwotoneFilePdf className="w-7 h-7"/>
                                <Link rel="noopener noreferrer" to={`/${generalInfo.document.asset.url}`} target="_blank"><p>{generalInfo.docName}</p></Link>
                              </>
                          }
                          </div>
                        </li>
                      </ul>
                    </div>
                </div>
              ))}
              </>
            ) : null}
            {artistPortal.portalInfo ? (
              <>
              {artistPortal.portalInfo.map(portalInfo => (
              <div id="moduleSection" className="mb-16">
                <div className="mb-6 flex flex-row space-x-2 items-center justify-items-center">
                  <div className="">
                    <Image fluid={portalInfo.icon.asset.fluid} alt={portalInfo.icon.alt} className="w-7" />
                  </div>
                  <h3 className="">{portalInfo.moduleName}</h3>
                </div>
                <div className="ml-8">
                  <ul className="space-y-4">
                    {portalInfo.documents ? (
                      <>
                      {portalInfo.documents.map(docItem => (
                        <li>
                          <div className="flex flex-row space-x-2 items-center justify-items-center">
                          {docItem.externalContent ? (
                            <>
                              <AiOutlineLink className="w-7 h-7"/>
                              <a rel="noopener noreferrer" href={docItem.externalLink} target="_blank"><p>{docItem.docName}</p></a>
                            </>
                          ) : <>
                                <AiTwotoneFilePdf className="w-7 h-7"/>
                                <a rel="noopener noreferrer" href={docItem.document.asset.url} target="_blank"><p>{docItem.docName}</p></a>
                              </>
                          }
                          </div>
                        </li>
                        ))}
                      </>
                    ) : null}
                  </ul>
                </div>
              </div>
              ))}
              </>
            ) : null}
            </>
          ))}
        </div>
      )}
    />
    </>
)

export default Profile