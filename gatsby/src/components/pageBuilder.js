import React from "react"
import PageBuilderContent from "./pageBuilderContent"
import PageBuilderColumns from "./pageBuilderColumns"
import PageBuilderHero from "./pageBuilderHero"

function PageBuilder(props) {
  const { type, pageBuilder, _rawPageBuilder } = props

  console.log('pageBuilder: ', pageBuilder);

  // Load the right component, based on the _type from Sanity
  const Components = {
    pageBuilderContent: PageBuilderContent,
    pageBuilderColumns: PageBuilderColumns,
    pageBuilderHero: PageBuilderHero
  }

  // 'raw' content needs to be passed in for the PortableText Component
  return pageBuilder.map((block, index) => {
    if (Components[block._type]) {
      return React.createElement(Components[block._type], {
        key: block._key,
        block: block,
        type,
        raw: _rawPageBuilder[index],
      });
    }
  });
}

export default PageBuilder
