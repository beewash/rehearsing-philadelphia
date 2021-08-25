import {GiPortal} from 'react-icons/gi'

export default {
  name: 'artistPortal',
  type: 'document',
  title: 'Artist Portal',
  icon: GiPortal,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'portalInfo',
      title: 'Info',
      type: 'array',
      of: [{type: 'moduleSection'}]
    }
  ]
}
