import { graphql } from "gatsby";

export const query = graphql`
  fragment IndexBuilder on SanitySiteSettings {
    _rawPageBuilder(resolveReferences: {maxDepth: 10})
    pageBuilder {
      ... on SanityPageBuilderGrid01 {
        _key
        _type
        _rawGridItems(resolveReferences: {maxDepth: 10})
        gridItems {
          ... on SanityTileAbout {
            _key
            _type
            title
            tileColor
            textColor
            colLayoutSection {
              colLg
              colMd
              colSm
            }
            rowLayoutSection {
              rowLg
              rowMd
            }
            cta {
              linkText
              linkTo {
                externalContent
                linkUrl
              }
            }
          }
          ... on SanityTileBasic {
            _key
            _type
            tileColor
            colLayoutSection {
              colLg
              colMd
              colSm
            }
            rowLayoutSection {
              rowLg
              rowMd
            }
            tileItem {
              personName
              textColor
              hoverColor
              slug {
                current
              }
            }
          }
          ... on SanityTileDescription {
            _key
            _type
            tileColor
            textColor
            colLayoutSection {
              colLg
              colMd
              colSm
            }
            rowLayoutSection {
              rowLg
              rowMd
            }
            cta {
              linkText
              linkTo {
                externalContent
                linkUrl
              }
            }
            _rawTextBlocks(resolveReferences: {maxDepth: 10})
            textBlocks {
              _key
              _type
              _rawBody(resolveReferences: {maxDepth: 10})
              body {
                _key
                _type
                children {
                  text
                }
              }
            }
          }
          ... on SanityPageBuilderColumns {
            _key
            _type
            colLayoutSection {
              colSm
              colMd
              colLg
            }
            rowLayoutSection {
              rowMd
              rowLg
            }
            columns {
              title
              bgColor
              textColor
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
          ... on SanityTileLocation {
            _key
            _type
            title
            tileColor
            colLayoutSection {
              colLg
              colMd
              colSm
            }
            rowLayoutSection {
              rowLg
              rowMd
            }
            _rawBody(resolveReferences: {maxDepth: 10})
            body {
              children {
                text
              }
            }
            image {
              alt
              asset {
                fluid(maxWidth: 800) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            cta {
              linkText
              linkTo {
                externalContent
                linkUrl
              }
            }
          }
        }
      }
      ... on SanityPageBuilderLineBreak {
        _key
        _type
        borderColor
        borderLength
        borderMargin
        borderWidth
      }
      ... on SanityPageBuilderBreak {
        _key
        _type
        pageBreak {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;