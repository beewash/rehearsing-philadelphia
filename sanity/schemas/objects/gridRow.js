export default {
  title: 'Row Layout (Height)',
  name: 'gridRow',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      title: 'Large Screen Layout',
      name: 'rowLg',
      description: 'Define row for large screens (min-width: 1024px) - Laptops & Desktops',
      type: 'string',
      options: {
        list: [
          {title: '1', value: 'grid-row-1'},
          {title: '2', value: 'grid-row-2'},
          {title: '3', value: 'grid-row-3'},
          {title: '4', value: 'grid-row-4'},
          {title: '5', value: 'grid-row-5'},
          {title: '6', value: 'grid-row-6'}
        ]
      }
    },
    {
      title: 'Medium Screen Layout',
      name: 'rowMd',
      description: 'Define row for medium screens (min-width: 768px) - Ipads & Small laptops',
      type: 'string',
      options: {
        list: [
          {title: '1', value: 'grid-row-1'},
          {title: '2', value: 'grid-row-2'}
        ]
      }
    }
  ]
}
