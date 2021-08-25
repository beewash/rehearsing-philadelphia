import React from "react"
import { Link, graphql, StaticQuery } from 'gatsby'
import { AiTwotoneFilePdf, AiOutlineLink } from 'react-icons/ai'

const ARTIST_PORTAL_QUERY = graphql`
  query ArtistPortal { 
    artistPortal: allSanityArtistPortal {
      edges {
        node {
          _key
          portalInfo {
            _key
            moduleName
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
    <StaticQuery
      query={ARTIST_PORTAL_QUERY}
      render={data => (
        <div className="max-w-6xl mx-auto px-2.5 pb-28">
          {data && data.artistPortal.edges.map(({node: artistPortal}) => (
            <>
            {artistPortal.portalInfo ? (
              <>
              {artistPortal.portalInfo.map(portalInfo => (
              <div id="moduleSection" className="mb-16">
                <div className="mb-6">
                  <h3 className="">{portalInfo.moduleName}</h3>
                </div>
                <div>
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
                                <Link rel="noopener noreferrer" to={`/${docItem.document.asset.url}`} target="_blank"><p>{docItem.docName}</p></Link>
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
)

export default Profile