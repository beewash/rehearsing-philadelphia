export default {
  name: 'pageBuilderCalendar',
  type: 'object',
  title: 'Calendar',
  fields: [
    {
      title: 'title',
      name: 'title',
      type: 'string',
      description: 'This is only used internally within Sanity.  This text will not appear on the website.'
    },
    {
      title: 'Events',
      name: 'events',
      description: 'Add all appropriate events for this list.',
      type: 'array',
      of: [{type: 'event'}]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({title}) {
      return {
        title
      }
    }
  }
}
