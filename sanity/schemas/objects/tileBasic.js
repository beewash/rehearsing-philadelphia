export default {
  name: 'tileBasic',
  title: 'Basic Tile',
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
      description: 'Set background color of tile.',
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
      title: 'Tile Item',
      name: 'tileItem',
      description: 'Add all appropriate items.',
      type: 'array',
      of: [{type: 'reference',
        to: [{type: 'people'}]}]
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
