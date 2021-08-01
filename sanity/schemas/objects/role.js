export default {
  name: 'roleObject',
  title: 'List of roles',
  type: 'object',
  fields: [
    {
      name: 'roleType',
      title: 'Role Type',
      type: 'string',
      options: {
        list: [
          {title: 'Artist', value: 'artist'},
          {title: 'Composer', value: 'composer'},
          {title: 'Faculty', value: 'faculty'}
        ],
        layout: 'radio'
      }
    }
  ]
}
