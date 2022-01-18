import {BsPen} from 'react-icons/bs'

export default {
  name: 'press',
  title: 'Press',
  type: 'document',
  icon: BsPen,
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
