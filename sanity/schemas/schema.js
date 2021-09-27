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
import performances from './documents/performances'
import sponsors from './documents/sponsors'
import locations from './documents/locations'
import legal from './documents/legal'
import artistPortal from './documents/artistPortal'

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
import column from './objects/column'
import link from './objects/link'
// import navBuilder from './objects/navBuilder'
import navItem from './objects/navItem'
// import navGroup from './objects/navGroup'
import emailEval from './objects/emailEval'
import colorPicker from './objects/colorPicker'
import colLayout from './objects/colLayout'
import rowLayout from './objects/rowLayout'
import tileAbout from './objects/tileAbout'
import tileBasic from './objects/tileBasic'
import tileDescription from './objects/tileDescription'
import tileLocation from './objects/tileLocation'
import role from './objects/role'
import imgLink from './objects/imgLink'
import performanceObject from './objects/performanceObject'
import docAttachment from './objects/docAttachment'
import moduleSection from './objects/moduleSection'
import cta from './objects/cta'

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
    performanceModules,
    locations,
    performances,
    sponsors,
    legal,
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
    column,
    mainImage,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    emailEval,
    colorPicker,
    colLayout,
    rowLayout,
    tileAbout,
    tileBasic,
    tileDescription,
    tileLocation,
    role,
    imgLink,
    performanceObject,
    docAttachment,
    moduleSection,
    cta
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
