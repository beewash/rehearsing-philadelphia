export default {
  name: 'pageBuilderRoster',
  type: 'object',
  title: 'Body',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {
      title: 'Roster',
      name: 'roster',
      description: 'Add all appropriate artists for this list.',
      type: 'array',
      of: [{type: 'reference',
        to: [{type: 'people'}]}]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare () {
      return {
        title: 'Roster'
      }
    }
  }
}
