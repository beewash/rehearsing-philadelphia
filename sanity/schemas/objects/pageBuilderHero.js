export default {
  name: 'pageBuilderHero',
  type: 'object',
  title: 'Hero',
  fields: [
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      intialValue: 'condensed',
      options: {
        list: [
          {title: 'Full', value: 'full'},
          {title: 'Condensed', value: 'condensed'}
        ]
      }
    },
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'body', type: 'bodyPortableText', title: 'Body'},
    {name: 'image', type: 'mainImage', title: 'Image'}
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
