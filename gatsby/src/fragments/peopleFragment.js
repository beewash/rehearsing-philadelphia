import { graphql } from "gatsby";

export const query = graphql`
  fragment PeopleBuilder on SanityPeople {
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
      ... on SanityPageBuilderArtistHero {
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
        bkgImage {
          alt
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      ... on SanityPageBuilderSocial {
        _key
        _type
        socialList {
          linkText
          socialIcon {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
          socialLink {
            externalContent
            linkUrl
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
    }
  }
`;