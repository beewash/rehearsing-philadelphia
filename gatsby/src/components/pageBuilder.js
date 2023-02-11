import React from "react"
import PageBuilderContent from "./pageBuilderContent"
import PageBuilderColumns from "./pageBuilderColumns"
import PageBuilderHero from "./pageBuilderHero"
import PageBuilderBody from "./pageBuilderBody"
import PageBuilderPageTitle from "./pageBuilderPageTitle"
import PageBuilderRoster from "./pageBuilderRoster"
import PageBuilderPageBreak from "./pageBuilderPageBreak"
import PageBuilderLineBreak from "./pageBuilderLineBreak"
import PageBuilderArtistHero from "./pageBuilderArtistHero"
import PageBuilderSocial from "./pageBuilderSocial"
import PageBuilderGrid01 from "./pageBuilderGrid01"
import PageBuilderDocAttachment from "./pageBuilderDocAttachment"
import PageBuilderPressClippings from "./pageBuilderPressClippings"
import PageBuilderFAQ from "./pageBuilderFAQ"
import PageBuilderCalendar from "./pageBuilderCalendar"
import PageBuilderEvents from "./pageBuilderEvents"
import PageBuilderRadio from "./pageBuilderRadio"
import PageBuilderVideoEmbed from "./pageBuilderVideoEmbed"
import CTA from "./cta"
import ImageGallery from "./imageGallery"

function PageBuilder(props) {
  const { type, pageBuilder, _rawPageBuilder } = props

  // console.log('pageBuilder: ', pageBuilder);

  // Load the right component, based on the _type from Sanity
  const Components = {
    pageBuilderHero: PageBuilderHero,
    pageBuilderArtistHero: PageBuilderArtistHero,
    pageBuilderPageTitle: PageBuilderPageTitle,
    pageBuilderBody: PageBuilderBody,
    pageBuilderContent: PageBuilderContent,
    pageBuilderColumns: PageBuilderColumns,
    pageBuilderRoster: PageBuilderRoster,
    pageBuilderBreak: PageBuilderPageBreak,
    pageBuilderLineBreak: PageBuilderLineBreak,
    pageBuilderSocial: PageBuilderSocial,
    pageBuilderGrid01: PageBuilderGrid01,
    pageBuilderPressClippings: PageBuilderPressClippings,
    pageBuilderFAQ: PageBuilderFAQ,
    pageBuilderCalendar: PageBuilderCalendar,
    pageBuilderRadio: PageBuilderRadio,
    pageBuilderVideoEmbed: PageBuilderVideoEmbed,
    event: PageBuilderEvents,
    gallery: ImageGallery,
    docAttachment: PageBuilderDocAttachment,
    cta: CTA
  }

  // 'raw' content needs to be passed in for the PortableText Component
  return pageBuilder.map((block, index) => {
    if (Components[block._type]) {
      return React.createElement(Components[block._type], {
        key: block._key,
        block: block,
        type,
        raw: _rawPageBuilder[index]
      });
    }
  });
}

export default PageBuilder
