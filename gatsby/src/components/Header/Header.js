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
`;

const Header = props => {
  const [isExpanded, toggleExpansion] = useState(false)
  const [isOpen, setOpen] = useState(false)
  
  const {data} = props
  const headernav = data && data.headernav

  console.log('header: ', headernav);

  return (
    <StaticQuery
      query={HEADER_QUERY}
      render={data => (
        <>
        <header className="w-screen sticky top-0 z-50 flex shadow-lg bg-white flex-wrap">
        {data && data.headernav.edges.map(({node: headernav}) => (
          <nav role='navigation' className="z-45 w-full flex flex-wrap relative">
            <div id="navMain" className="w-full flex relative justify-between p-4">
              <div className="flex items-center">
                {headernav.rhLogo ? (
                <Link className="flex flex-row md:space-x-2 items-center justify-items-center justify-center" to="/">
                  {headernav.rhLogo.map(logo => (
                    <Image fluid={logo.asset.fluid} className="w-12 inline" />
                  ))}
                    <div className="hidden md:inline">
                      <p className="font-medium">{headernav.title}</p>
                    </div>
                </Link>
                ) : null}
              </div>
              <div className="flex flex-row space-x-2.5 lg:space-x-10 items-center justify-items-center justify-center">
                <div>
                  <button className="flex">
                    <Link to="/open-call" className="py-1 px-4 font-acuminPro font-medium uppercase text-white text-sm bg-orchestra-green border-black border-2 rounded-full hover:bg-black hover:text-white">
                      Orchestra Open Call
                    </Link>
                  </button>
                </div>
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
              <div className="w-full absolute top-0 flex p-4 text-center bg-white shadow-lg transform">
                <ul role='menubar' className="flex flex-col mx-auto">
                {headernav.mainNavigation ? (
                  <>
                    {headernav.mainNavigation.map(mainNav => (
                      <>
                      {mainNav.navItems.map(navItems => (
                      <li key={navItems._key} className="text-cfsL md:text-6xl mb-8">
                        {navItems.navItemUrl.externalContent ? (
                          <a href={navItems.navItemUrl.linkUrl} target='_blank' rel="noreferrer">{navItems.text}</a>
                        )
                          : <Link to={`/${navItems.navItemUrl.linkUrl}`}>{navItems.text}</Link>
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
        <div className="z-1 absolute w-full h-1 top-0 left-0 flex-row space-x-4">
          <div className="w-full h-full hover:bg-solo-yellow"></div>
          <div className="w-full h-full hover:bg-duet-red"></div>
          <div className="w-full h-full hover:bg-ensemble-blue"></div>
          <div className="w-full h-full hover:bg-orchestra-green"></div>
        </div>
        </>
      )}
    />
  )
}

export default Header
