export default {
  name: 'pageBuilderLineBreak',
  type: 'object',
  title: 'Line Break',
  fields: [
    {
      title: 'Border length',
      name: 'borderLength',
      type: 'string',
      options: {
        list: [
          {title: '100%', value: 'full'},
          {title: '80%', value: '1/2'},
          {title: '60%', value: '3/5'},
          {title: '40%', value: '2/5'},
          {title: '20%', value: '1/5'}
        ]
      }
    },
    {
      title: 'Border Thickness',
      name: 'borderWidth',
      type: 'string',
      options: {
        list: [
          {title: '0', value: '0'},
          {title: '1', value: '1'},
          {title: '2', value: '2'},
          {title: '3', value: '3'},
          {title: '4', value: '4'}
        ]
      }
    },
    {
      title: 'Border Color',
      name: 'borderColor',
      type: 'string',
      options: {
        list: [
          {title: 'White', value: 'white'},
          {title: 'Black', value: 'black'}
        ]
      }
    },
    {
      title: 'Margin',
      name: 'borderMargin',
      type: 'string',
      options: {
        list: [
          {title: 'X-small', value: '4'},
          {title: 'Small', value: '8'},
          {title: 'Medium', value: '16'},
          {title: 'Large', value: '24'},
          {title: 'X-large', value: '32'},
          {title: 'XX-large', value: '40'},
          {title: 'XXX-large', value: '48'}
        ]
      }
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare () {
      return {
        title: 'Page Break'
      }
    }
  }
}
