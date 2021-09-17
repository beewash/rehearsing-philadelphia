export default {
  name: 'tileDescription',
  title: 'Description Tile',
  type: 'object',
  fields: [
    {
      name: 'tileLabel',
      title: 'Label',
      type: 'string',
      description: 'Label this tile to easily discern its contents'
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
      name: 'textBlocks',
      title: 'Grid Description',
      type: 'array',
      of: [{type: 'pageBuilderBody'}]
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
