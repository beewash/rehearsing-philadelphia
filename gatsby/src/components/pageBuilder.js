import React from "react"
import PageBuilderContent from "./pageBuilderContent"
import PageBuilderColumns from "./pageBuilderColumns"
import PageBuilderHero from "./pageBuilderHero"
import PageBuilderBody from "./pageBuilderBody"
import PageBuilderPageTitle from "./pageBuilderPageTitle"
import PageBuilderRoster from "./pageBuilderRoster"
import PageBuilderPageBreak from "./pageBuilderPageBreak"

function PageBuilder(props) {
  const { type, pageBuilder, _rawPageBuilder } = props

  console.log('pageBuilder: ', pageBuilder);

  // Load the right component, based on the _type from Sanity
  const Components = {
    pageBuilderHero: PageBuilderHero,
    pageBuilderPageTitle: PageBuilderPageTitle,
    pageBuilderBody: PageBuilderBody,
    pageBuilderContent: PageBuilderContent,
    pageBuilderColumns: PageBuilderColumns,
    pageBuilderRoster: PageBuilderRoster,
    pageBuilderBreak: PageBuilderPageBreak
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
