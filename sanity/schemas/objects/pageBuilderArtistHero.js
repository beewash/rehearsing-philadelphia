export default {
  name: 'pageBuilderArtistHero',
  type: 'object',
  title: 'Artist Hero',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'image', type: 'mainImage', title: 'Image'},
    {name: 'bkgImage', type: 'mainImage', title: 'Background Image'}
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    },
    prepare ({media}) {
      return {
        title: 'Hero',
        media
      }
    }
  }
}
