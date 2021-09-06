import { graphql } from "gatsby";

export const query = graphql`
  fragment NavBuilder on SanityNav {
    _rawNavItems(resolveReferences: {maxDepth: 10})
    navItems {
      ... on SanityNavGroup {
        _key
        _type
        groupName
        navItemObject {
          text
          navItemUrl {
            externalContent
            linkUrl
          }
        }
      }
      ... on SanityNavItem {
        _key
        _type
        text
        navItemUrl {
          externalContent
          linkUrl
        }
      }
    }
  }
`;