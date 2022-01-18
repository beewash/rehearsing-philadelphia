import {FaPenAlt} from 'react-icons/fa'

export default {
  name: 'press',
  title: 'Press',
  type: 'document',
  icon: FaPenAlt,
  preview: {
    select: {
      title: 'pressTitle',
      subtitle: 'publishDate'
    },
    prepare ({title, subtitle}) {
      return {
        title,
        subtitle
      }
    }
  },
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
