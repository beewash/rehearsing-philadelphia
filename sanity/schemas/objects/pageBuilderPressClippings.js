export default {
  name: 'pageBuilderPressClippings',
  title: 'Press Items',
  type: 'object',
  fields: [
    {
      name: 'pressItem',
      title: 'Press Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'press'}]
        }
      ]
    }
  ]
}
