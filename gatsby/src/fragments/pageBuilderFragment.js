import { graphql } from "gatsby";

export const query = graphql`
  fragment PageBuilder on SanityPage {
    _rawPageBuilder(resolveReferences: { maxDepth: 10 })
    pageBuilder {
      ... on SanityPageBuilderContent {
        _key
        _type
        title
        image {
          alt
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      ... on SanityPageBuilderBody {
        _key
        _type
        title
      }
      ... on SanityPageBuilderPageTitle {
        _key
        _type
        title
      }
      ... on SanityPageBuilderHero {
        _key
        _type
        title
        image {
          alt
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      ... on SanityPageBuilderColumns {
        _key
        _type
        columns {
          title
          image {
            alt
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
      ... on SanityPageBuilderRoster {
        _key
        _type
        title
        roster {
          personName
          _rawBio (resolveReferences: {maxDepth: 10})
          bio {
            children {
              text
            }
          }
          headshot {
            alt
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
          slug {
            current
          }
        }
      }
      ... on SanityPageBuilderBreak {
        _key
        _type
        pageBreak {
          alt
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      ... on SanityCta {
        _key
        _type
        linkText
        linkTo {
          externalContent
          linkUrl
        }
      }
    }
  }
`;