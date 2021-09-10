export default {
  name: 'pageBuilderSocial',
  type: 'object',
  title: 'Social',
  fields: [
    {
      title: 'Social',
      name: 'socialList',
      type: 'array',
      of: [{type: 'imgLink'}]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare () {
      return {
        title: 'Social'
      }
    }
  }
}
