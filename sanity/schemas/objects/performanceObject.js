export default {
  name: 'performanceObject',
  title: 'List of performances',
  type: 'object',
  fields: [
    {
      name: 'performanceTitle',
      title: 'Performance Title',
      type: 'string'
    },
    {
      name: 'performanceListObject',
      title: 'List of performances',
      type: 'reference',
      to: [{type: 'performances'}]
    }
  ]
}
