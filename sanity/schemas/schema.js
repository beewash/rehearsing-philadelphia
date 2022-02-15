// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import siteSettings from './documents/siteSettings'
import nav from './documents/navigation'
import page from './documents/page'
import people from './documents/people'
import performanceModules from './documents/performanceModules'
import artistPortal from './documents/artistPortal'
import press from './documents/press'
import faq from './documents/faq'
import calendar from './documents/calendar'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import pageBuilder from './objects/pageBuilder'
import pageBuilderColumns from './objects/pageBuilderColumns'
import pageBuilderContent from './objects/pageBuilderContent'
import pageBuilderHero from './objects/pageBuilderHero'
import pageBuilderArtistHero from './objects/pageBuilderArtistHero'
import pageBuilderPageTitle from './objects/pageBuilderPageTitle'
import pageBuilderBody from './objects/pageBuilderBody'
import pageBuilderRoster from './objects/pageBuilderRoster'
import pageBuilderPageBreak from './objects/pageBuilderPageBreak'
import pageBuilderLineBreak from './objects/pageBuilderLineBreak'
import pageBuilderGrid01 from './objects/pageBuilderGrid01'
import pageBuilderSocial from './objects/pageBuilderSocial'
import pageBuilderPressClippings from './objects/pageBuilderPressClippings'
import pageBuilderFAQ from './objects/pageBuilderFAQ'
import pageBuilderCalendar from './objects/pageBuilderCalendar'
import event from './objects/event'
import column from './objects/column'
import link from './objects/link'
// import navBuilder from './objects/navBuilder'
import navItem from './objects/navItem'
// import navGroup from './objects/navGroup'
import emailEval from './objects/emailEval'
import colorPicker from './objects/colorPicker'
import gridCols from './objects/gridCols'
import gridRow from './objects/gridRow'
import colLayout from './objects/colLayout'
import rowLayout from './objects/rowLayout'
import tileAbout from './objects/tileAbout'
import tileArtist from './objects/tileArtist'
import tileBasic from './objects/tileBasic'
import tileDescription from './objects/tileDescription'
import tileLocation from './objects/tileLocation'
import role from './objects/role'
import imgLink from './objects/imgLink'
import docAttachment from './objects/docAttachment'
import moduleSection from './objects/moduleSection'
import cta from './objects/cta'
import video from './objects/video'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    nav,
    artistPortal,
    page,
    people,
    calendar,
    press,
    performanceModules,
    faq,
    link,
    // navBuilder,
    navItem,
    // navGroup,
    pageBuilder,
    pageBuilderColumns,
    pageBuilderContent,
    pageBuilderHero,
    pageBuilderArtistHero,
    pageBuilderPageTitle,
    pageBuilderBody,
    pageBuilderRoster,
    pageBuilderGrid01,
    pageBuilderPageBreak,
    pageBuilderLineBreak,
    pageBuilderSocial,
    pageBuilderPressClippings,
    pageBuilderFAQ,
    pageBuilderCalendar,
    event,
    column,
    mainImage,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    emailEval,
    colorPicker,
    gridCols,
    gridRow,
    colLayout,
    rowLayout,
    tileAbout,
    tileArtist,
    tileBasic,
    tileDescription,
    tileLocation,
    role,
    imgLink,
    docAttachment,
    moduleSection,
    cta,
    video
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
