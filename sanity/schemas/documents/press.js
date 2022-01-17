import {RiArticleFill} from 'react-icons/ri'

export default {
  name: 'press',
  title: 'Press',
  type: 'document',
  icon: RiArticleFill,
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
