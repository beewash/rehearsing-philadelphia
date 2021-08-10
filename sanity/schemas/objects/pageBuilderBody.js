export default {
  name: 'pageBuilderBody',
  type: 'object',
  title: 'Body',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'body', type: 'bodyPortableText', title: 'Body'}
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare () {
      return {
        title: 'Body'
      }
    }
  }
}
