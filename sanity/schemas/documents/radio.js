import {BsMusicNoteBeamed} from 'react-icons/bs'

export default {
  name: 'radio',
  title: 'Radio',
  type: 'document',
  icon: BsMusicNoteBeamed,
  preview: {
    select: {
      title: 'title'
    },
    prepare ({title}) {
      return {
        title
      }
    }
  },
  orderings: [
    {
      title: 'List Order',
      name: 'listOrder',
      by: [
        {field: 'position', direction: 'asc'}
      ]
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'module',
      title: 'Module',
      type: 'string',
      options: {
        list: [
          {title: 'Solo', value: 'solo-yellow'},
          {title: 'Duet', value: 'duet-red'},
          {title: 'Ensemble', value: 'ensemble-blue'},
          {title: 'Orchestra', value: 'orchestra-green'}
        ]
      }
    },
    {
      name: 'audio',
      title: 'Audio',
      type: 'file'
    },
    {
      name: 'position',
      title: 'Position',
      type: 'number',
      options: {
        layout: 'dropdown'
      }
    }
  ]
}
