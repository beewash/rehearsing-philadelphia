import React, { useState } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const HEADER_QUERY = graphql`
  query HeaderNav {
    headernav: allSanitySiteSettings(
      filter: {mainNavigation: {elemMatch: {title: {eq: "Header Nav"}}}}
    ) {
      edges {
        node {
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
        <header className="w-screen fixed top-0 z-50 flex shadow-lg bg-white flex-wrap">
        {data && data.headernav.edges.map(({node: headernav}) => (
          <nav role='navigation' className="w-full flex flex-wrap">
            <div id="navMain" className="w-full flex justify-between p-4">
              <div className="">
                <Link className="font-black text-3xl font-sainteColombe" title={headernav.title} to="/">{headernav.title}</Link>
              </div>
              <div className="flex flex-row space-x-10">
                <div>
                  <button>
                    <Link to="/open-call">Open Call</Link>
                  </button>
                </div>
                <div className="w-10 h-10">
                  <button onClick={() => toggleExpansion(!isExpanded)}>
                    <div>Menu</div>
                  </button>
                </div>
              </div>
            </div>
            <div id="navMenu" className={`w-full flex p-4 text-center ${ isExpanded ? `block` : `hidden` }`}>
                    {headernav.mainNavigation ? (
                      <ul role='menubar' className="flex flex-col mx-auto">
                        {headernav.mainNavigation.map(mainNav => (
                          <>
                          {mainNav.navItems.map(navItems => (
                          <li key={navItems._key} className="text-6xl mb-8">
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
          </nav>
        ))}
        </header>
      )}
    />
  )
}

export default Header
