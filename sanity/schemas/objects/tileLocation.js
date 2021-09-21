export default {
  name: 'tileLocation',
  title: 'Location Tile',
  type: 'object',
  fields: [
    {
      name: 'tileLabel',
      title: 'Label',
      type: 'string',
      description: 'Label this tile to easily discern its contents'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'tileColor',
      title: 'Tile Color',
      type: 'string',
      description: 'Set background color of tile.  Leave blank to use default background color.',
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
      name: 'body',
      title: 'Body',
      type: 'bodyPortableText'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
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
