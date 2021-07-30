import {GrNavigate} from 'react-icons/gr'

export default {
  name: 'nav',
  type: 'document',
  title: 'Navigation',
  icon: GrNavigate,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'id',
      type: 'string',
      title: 'Id'
    },
    {
      name: 'navItems',
      type: 'array',
      title: 'Navigation Items',
      of: [{type: 'navItem'}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'id'
    }
  }
}
