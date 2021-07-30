import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
// import styled from 'styled-components'

// const HeaderStyles = styled.div`
//   padding: 1rem 0 0.5rem 0;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   a{
//     margin-right: 1rem;
//     &::last-of-type{
//       margin-right: 0;
//     }
//   }
// `

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
      <header>
      {data && data.headernav.edges.map(({node: headernav}) => (
        <>
          <div>
            <h1>
              <Link title={headernav.title} to="/">{headernav.title}</Link>
            </h1>
          </div>
          <nav role='navigation'>
                  {headernav.mainNavigation ? (
                    <ul role='menubar'>
                      {headernav.mainNavigation.map(mainNav => (
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
          </nav>
        </>
      ))}
      </header>
    )}
  />
)

export default Header
