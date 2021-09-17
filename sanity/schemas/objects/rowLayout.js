export default {
  title: 'Row Layout (Height)',
  name: 'rowLayout',
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
          {title: '1', value: 'row-span-1'},
          {title: '2', value: 'row-span-2'}
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
          {title: '1', value: 'row-span-1'},
          {title: '2', value: 'row-span-2'}
        ]
      }
    }
  ]
}
