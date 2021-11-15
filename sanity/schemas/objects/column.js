export default {
  name: 'column',
  title: 'Column',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'bgColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          {title: 'Transparent', value: 'transparent'},
          {title: 'White', value: 'white'},
          {title: 'Black', value: 'black'},
          {title: 'Grey', value: 'that-grey'},
          {title: 'Solo', value: 'solo-yellow'},
          {title: 'Duet', value: 'duet-red'},
          {title: 'Ensemble', value: 'ensemble-blue'},
          {title: 'Orchestra', value: 'orchestra-green'}
        ]
      }
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      options: {
        list: [
          {title: 'Transparent', value: 'transparent'},
          {title: 'White', value: 'white'},
          {title: 'Black', value: 'black'},
          {title: 'Solo', value: 'solo-yellow'},
          {title: 'Duet', value: 'duet-red'},
          {title: 'Ensemble', value: 'ensemble-blue'},
          {title: 'Orchestra', value: 'orchestra-green'}
        ]
      }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'bodyPortableText'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage'
    }
  ]
}
