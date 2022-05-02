export default {
  name: 'pageBuilderRadio',
  type: 'object',
  title: 'Radio',
  fields: [
    {
      title: 'Radio Files',
      name: 'radioFiles',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'radio'}
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare () {
      return {
        title: 'Radio Tiles'
      }
    }
  }
}
