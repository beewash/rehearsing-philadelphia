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
        summary {
          _key
          _type
        }
        _rawSummary
        roster {
          _key
          personName
          hoverColor
          roleList
          moduleList
          rosterColor
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
      ... on SanityDocAttachment {
        _key
        _type
        docName
        externalContent
        externalLink
        document {
          asset {
            url
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
        bgColor
        bgHoverColor
        textColor
        textHoverColor
      }
    }
  }
`;