export default {
  name: 'event',
  type: 'object',
  title: 'Event',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'calEvent',
      title: 'Event',
      type: 'array',
      of: [{type: 'reference',
        to: [{type: 'calendar'}]}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      event: 'calEvent'
    },
    prepare ({event = [], title}) {
      const titles = []
      event.forEach(col => titles.push(col.title))
      return {
        title: title,
        subtitle: event.length > 0 ? `${event.length} Event(s)` : null
      }
    }
  }
}
