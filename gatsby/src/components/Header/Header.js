import React, { useState } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Image } from 'gatsby-image'
import { AiOutlineMenu } from 'react-icons/ai'
import logo from '../../images/logo-color.png'

const HEADER_QUERY = graphql`
query HeaderNav {
  headernav: allSanitySiteSettings {
    edges {
      node {
        _rawLogo
        logo {
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

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <StaticQuery
      query={HEADER_QUERY}
      render={data => (
        <header className="w-screen sticky top-0 z-50 flex shadow-lg bg-white flex-wrap">
        {data && data.headernav.edges.map(({node: headernav}) => (
          <nav role='navigation' className="w-full flex flex-wrap relative">
            <div id="navMain" className="w-full flex relative justify-between p-4">
              <div className="">
                <Link className="font-black hidden lg:block font-sainteColombe" to="/">
                  {headernav.title}
                </Link>
              </div>
              <div className="flex flex-row space-x-2.5 lg:space-x-10 items-center">
                <div>
                  <button>
                    <Link to="/open-call" className="py-1 md:py-2 px-4 font-acuminPro font-medium uppercase text-white text-sm bg-orchestra-green border-black border-2 rounded-full hover:bg-black hover:text-white">Orchestra Open Call</Link>
                  </button>
                </div>
                <div className="">
                  <button onClick={() => toggleExpansion(!isExpanded)}>
                    <AiOutlineMenu className="w-6 h-full" />
                  </button>
                </div>
              </div>
            </div>
            <div id="navMenu" className={`w-full relative ${ isExpanded ? `block` : `hidden` }`}>
              <div className="w-full absolute top-0 flex p-4 text-center bg-white shadow-lg">
                {headernav.mainNavigation ? (
                  <ul role='menubar' className="flex flex-col mx-auto">
                    {headernav.mainNavigation.map(mainNav => (
                      <>
                      {mainNav.navItems.map(navItems => (
                      <li key={navItems._key} className="text-cfsL md:text-6xl mb-8">
                        {navItems.navItemUrl.externalContent ? (
                          <a href={navItems.navItemUrl.linkUrl} target='_blank' rel='noopener noreferer'>{navItems.text}</a>
                        )
                          : <Link to={`/${navItems.navItemUrl.linkUrl}`}>{navItems.text}</Link>
                        }
                      </li>
                      ))}
                      </>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </nav>
        ))}
        </header>
      )}
    />
  )
}

export default Header
