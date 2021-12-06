export default {
  title: 'Column Layout (Width)',
  name: 'gridCols',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      title: 'Large Screen Layout',
      name: 'colsLg',
      description: 'Define columns for large screens (min-width: 1024px) - Laptops & Desktops',
      type: 'string',
      options: {
        list: [
          {title: '1', value: 'grid-cols-1'},
          {title: '2', value: 'grid-cols-2'},
          {title: '3', value: 'grid-cols-3'},
          {title: '4', value: 'grid-cols-4'},
          {title: '5', value: 'grid-cols-5'}
        ]
      }
    },
    {
      title: 'Medium Screen Layout',
      name: 'colsMd',
      description: 'Define columns for medium screens (min-width: 768px) - Ipads & Small laptops',
      type: 'string',
      options: {
        list: [
          {title: '1', value: 'grid-cols-1'},
          {title: '2', value: 'grid-cols-2'},
          {title: '3', value: 'grid-cols-3'}
        ]
      }
    },
    {
      title: 'Small Screen Layout',
      name: 'colsSm',
      description: 'Define columns for small screens (mx-width: 767px) - Mobile Devices',
      type: 'string',
      options: {
        list: [
          {title: '1', value: 'grid-cols-1'},
          {title: '2', value: 'grid-cols-2'}
        ]
      }
    }
  ]
}
