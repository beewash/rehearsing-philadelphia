import {MdNavigation} from 'react-icons/md'

export default {
  name: 'navItem',
  type: 'object',
  title: 'NavItem',
  icon: MdNavigation,
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Text'
    },
    {
      name: 'navItemUrl',
      type: 'link', // references link object
      title: 'Nav Item URL'
    }
  ]
}
