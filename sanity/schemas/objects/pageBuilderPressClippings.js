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
  ],
  preview: {
    select: {
      pressItems: 'pressItem'
    },
    prepare ({pressItems = []}) {
      const titles = []
      pressItems.forEach(item => titles.push(item.pressTitle))
      return {
        title: pressItems.length === 1 ? `1 Press Item` : `${pressItems.length} Press Items`
      }
    }
  }
}
