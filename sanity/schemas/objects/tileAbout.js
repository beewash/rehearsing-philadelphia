export default {
  name: 'tileAbout',
  title: 'About Tile',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'tileColor',
      title: 'Tile Color',
      type: 'string',
      description: 'Set background color of tile.',
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
      description: 'Set text color.',
      options: {
        list: [
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
      name: 'description',
      type: 'bodyPortableText',
      title: 'Grid Description'
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'CTA'
    },
    {
      name: 'colLayoutSection',
      title: 'Column Layout (Width)',
      type: 'colLayout'
    },
    {
      name: 'rowLayoutSection',
      title: 'Row Layout (Height)',
      type: 'rowLayout'
    }
  ]
}
