import React, { useState } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Squash as Hamburger } from 'hamburger-react'

const HEADER_QUERY = graphql`
query HeaderNav {
  headernav: allSanitySiteSettings {
    edges {
      node {
        rhLogo {
          asset {
            fluid(maxWidth: 800){
              ...GatsbySanityImageFluid
            }
          }
        }
        mainNavigation {
          navItems {
            text
            _key
            navItemUrl {
              linkUrl
              externalContent
            }
          }
        }
        title
      }
    }
  }
}
`

const Header = props => {
  const [isExpanded, toggleExpansion] = useState(false)
  const [isOpen, setOpen] = useState(false)

  return (
    <StaticQuery
      key="header_query"
      query={HEADER_QUERY}
      render={data => (
        <>
        <header className="w-screen sticky top-0 z-50 flex shadow-lg bg-white flex-wrap">
        {data && data.headernav.edges.map(({node: headernav}) => (
          <nav key={headernav.title} role='navigation' className="z-45 w-full flex flex-wrap relative">
            <div id="navMain" className="w-full flex relative justify-between p-4">
              <div className="flex items-center">
                {headernav.rhLogo ? (
                <Link className="flex flex-row md:space-x-2 items-center justify-items-center justify-center" to="/">
                  {headernav.rhLogo.map((logo, index) => (
                    <Image key={index} fluid={logo.asset.fluid} className="w-12 inline" />
                  ))}
                    <div className="hidden md:inline">
                      <p className="font-medium">{headernav.title}</p>
                    </div>
                </Link>
                ) : null}
              </div>
              <div className="flex flex-row space-x-2.5 lg:space-x-10 items-center justify-items-center justify-center">
                <div className="flex">
                  <button onClick={() => toggleExpansion(!isExpanded)}>
                    <Hamburger toggled={isOpen} toggle={setOpen} size={28} />
                  </button>
                </div>
              </div>
            </div>
            <div 
              id="navMenu"
              className={`z-40 w-full relative transition delay-150 duration-300 ease-in-out ${ isExpanded ? `block` : `hidden` }`}
            >
              <div className="w-full absolute top-0 flex text-center p-4 bg-white shadow-lg transform">
                <ul className="w-full flex flex-col mx-auto space-y-8 last:mb-8">
                {headernav.mainNavigation ? (
                  <>
                    {headernav.mainNavigation.map(mainNav => (
                      <>
                      {mainNav.navItems.map(navItems => (
                      <li key={navItems._key} className="w-full">
                        {navItems.navItemUrl.externalContent ? (
                          <a href={navItems.navItemUrl.linkUrl} target='_blank' rel="noreferrer" className="text-4xl md:text-6xl">{navItems.text}</a>
                        )
                          : <Link to={`/${navItems.navItemUrl.linkUrl}`} className="text-3xl md:text-5xl lg:text-6xl">{navItems.text}</Link>
                        }
                      </li>
                      ))}
                      </>
                    ))}
                    </>
                ) : null}
                </ul>
              </div>
            </div>
          </nav>
        ))}
        </header>
        </>
      )}
    />
  )
}

export default Header
