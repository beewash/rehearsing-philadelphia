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
  ]
}
