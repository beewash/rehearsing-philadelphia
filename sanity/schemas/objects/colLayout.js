export default {
  title: 'Column Layout (Width)',
  name: 'colLayout',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      title: 'Large Screen Layout',
      name: 'colLg',
      description: 'Define column for large screens (min-width: 1024px) - Laptops & Desktops',
      type: 'string',
      options: {
        list: [
          {title: '1', value: 'col-span-1'},
          {title: '2', value: 'col-span-2'},
          {title: '3', value: 'col-span-3'},
          {title: '4', value: 'col-span-4'},
          {title: '5', value: 'col-span-5'}
        ]
      }
    },
    {
      title: 'Medium Screen Layout',
      name: 'colMd',
      description: 'Define column for medium screens (min-width: 768px) - Ipads & Small laptops',
      type: 'string',
      options: {
        list: [
          {title: '1', value: 'col-span-1'},
          {title: '2', value: 'col-span-2'},
          {title: '3', value: 'col-span-3'}
        ]
      }
    },
    {
      title: 'Small Screen Layout',
      name: 'colSm',
      description: 'Define column for small screens (mx-width: 767px) - Mobile Devices',
      type: 'string',
      options: {
        list: [
          {title: '1', value: 'col-span-1'},
          {title: '2', value: 'col-span-2'}
        ]
      }
    }
  ]
}
