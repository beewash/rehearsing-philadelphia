export default {
  name: 'pageBuilderPageTitle',
  type: 'object',
  title: 'Page Title',
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
        title: 'Page Title'
      }
    }
  }
}
