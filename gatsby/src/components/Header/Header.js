import React from 'react'
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

const Header = () => (
  <StaticQuery
    query={HEADER_QUERY}
    render={data => (
      <header className="w-screen h-20 p-4 sticky top-0 z-50 flex shadow-xl bg-white">
      {data && data.headernav.edges.map(({node: headernav}) => (
        <>
          <div className="flex-initial">
            <Link className="font-black text-3xl" title={headernav.title} to="/">{headernav.title}</Link>
          </div>
          <nav role='navigation' className="flex-1">
                  {headernav.mainNavigation ? (
                    <ul role='menubar' className="flex flex-row">
                      {headernav.mainNavigation.map(mainNav => (
                        <>
                        {mainNav.navItems.map(navItems => (
                        <li key={navItems._key} className="w-1/3">
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
          </nav>
        </>
      ))}
      </header>
    )}
  />
)

export default Header
