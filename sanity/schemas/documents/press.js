export default {
  name: 'press',
  title: 'Press',
  type: 'document',
  fields: [
    {
      name: 'pressTitle',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'pressLink',
      title: 'Link',
      type: 'url'
    },
    {
      name: 'pressAuthor',
      title: 'Author',
      type: 'string'
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      description: 'ex. "January 1, 2022"',
      type: 'string'
    }
  ]
}
