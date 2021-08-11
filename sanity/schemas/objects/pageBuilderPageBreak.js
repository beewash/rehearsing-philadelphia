export default {
  name: 'pageBuilderBreak',
  type: 'object',
  title: 'Page Break',
  fields: [
    {name: 'pageBreak', type: 'mainImage', title: 'Page Break'}
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare () {
      return {
        title: 'Page Break'
      }
    }
  }
}
