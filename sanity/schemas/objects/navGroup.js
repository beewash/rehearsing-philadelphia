import {GrObjectGroup} from 'react-icons/gr'

export default {
  name: 'navGroup',
  type: 'object',
  title: 'Nav Group',
  icon: GrObjectGroup,
  fields: [
    {
      name: 'groupName',
      type: 'string',
      title: 'Group Name'
    },
    {
      name: 'navItemObject',
      title: 'Nav Item Object',
      type: 'array',
      of: [{type: 'navItem'}]
    }
  ]
}
