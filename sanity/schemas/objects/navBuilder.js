export default {
  name: 'navBuilder',
  type: 'array',
  title: 'Nav Builder',
  of: [
    {
      type: 'navItem',
      title: 'Nav Item'
    },
    {
      type: 'navGroup',
      title: 'Nav Group'
    }
  ]
}
