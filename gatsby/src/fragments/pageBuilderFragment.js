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
      ... on SanityGallery {
        _key
        _type
        images {
          alt
          _key
          asset {
            url
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
          moduleList
        }
      }
      ... on SanityPageBuilderBody {
        _key
        _type
        title
      }
      ... on SanityPageBuilderRadio {
        _key
        _type
        radioFiles {
          _id
          _type
          title
          secondaryTitle
          date
          module
          position
          audio {
            asset {
              url
            }
          }
          thumbnail {
            alt
            _key
            asset {
              url
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
      ... on SanityPageBuilderCalendar {
        _key
        _type
        events {
          _key
          title
          calEvent {
            title
            time
            location
            featuredArtist
            summary
            module
            icon {
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
            id
            date
            _id
          }
        }
      }
      ... on SanityEvent {
        _key
        _type
        title
        calEvent {
          _id
          _key
          _rawDescription
          slug {
            current
          }
          title
          date(formatString: "MMMM DD, YYYY")
          time
        }
      }
      ... on SanityPageBuilderFAQ {
        _key
        _type
        faqItems {
          _key
          _rawAnswer
          question
        }
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
        layout
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
      ... on SanityPageBuilderPressClippings {
        _key
        _type
        pressItem {
          _key
          pressTitle
          pressLink
          pressAuthor
          publishDate
        }
      }
      ... on SanityPageBuilderRoster {
        _key
        _type
        title
        optionalDescriptions {
          _rawDuetDescription
          _rawEnsembleDescription
          _rawOrchestraDescription
          _rawSoloDescription
        }
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