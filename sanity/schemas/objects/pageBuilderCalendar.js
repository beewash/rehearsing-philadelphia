export default {
  name: 'pageBuilderCalendar',
  type: 'object',
  title: 'Calendar',
  fields: [
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
    prepare () {
      return {
        title: 'Calendar'
      }
    }
  }
}
