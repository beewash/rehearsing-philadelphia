import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
// import styled from 'styled-components'

// const FooterStyles = styled.footer`
//   root {
//   }

//   .footerWrapper {
//     box-sizing: border-box;
//     max-width: 960px;
//     padding: 4.5em 1.5em 0 1.5em;
//     margin: 0 auto;

//     @media (min-width: 450px) {
//       padding: 6em 2em 1em 2em;
//     }
//   }
//   .siteInfo {
//     text-align: center;
//     font-size: var(--font-small-size);
//     line-height: var(--font-small-line-height);
//   }
// `

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
      <footer>
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

// export default function Footer() {
//   return (
//     <FooterStyles>
//       <div className="footerWrapper">
//         <div className="siteInfo">
//           &copy; {new Date().getFullYear()} Jaydan Urwin
//         </div>
//       </div>
//     </FooterStyles>
//   )
// }
