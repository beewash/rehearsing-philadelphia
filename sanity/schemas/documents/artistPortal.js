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
      name: 'generalInfo',
      title: 'General Info',
      type: 'array',
      of: [{type: 'docAttachment'}]
    },
    {
      name: 'portalInfo',
      title: 'Module Info',
      type: 'array',
      of: [{type: 'moduleSection'}]
    }
  ]
}
