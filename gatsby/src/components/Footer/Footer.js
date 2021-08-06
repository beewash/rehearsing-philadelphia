import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const FOOTER_QUERY = graphql`
  query FooterNav {
    footernav: allSanitySiteSettings(filter: {footerNavigation: {elemMatch: {title: {eq: "Footer Nav"}}}}) {
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
        }
      }
    }
  }
`;

const Footer = () => (
  <StaticQuery
    query={FOOTER_QUERY}
    render={data => (
      <footer className="w-screen bg-white p-4 border-t-2 border-black">
          <nav role='navigation'>
            {data && data.footernav.edges.map(({node: footernav}) => (
              <>
                {footernav.mainNavigation ? (
                  <ul role='menubar'>
                    {footernav.mainNavigation.map(mainNav => (
                      <>
                      {mainNav.navItems.map(navItems => (
                      <li key={navItems._key}>
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
              </>
            ))}
          </nav>
      </footer>
    )}
  />
)

export default Footer
