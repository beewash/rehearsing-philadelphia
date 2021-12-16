export default {
  name: 'pageBuilderRoster',
  type: 'object',
  title: 'Body',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {
      name: 'summary',
      title: 'Summary',
      description: 'Optional text to describe what this section is about.',
      type: 'bodyPortableText'
    },
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
