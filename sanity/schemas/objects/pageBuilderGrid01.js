export default {
  name: 'pageBuilderGrid01',
  type: 'object',
  title: 'Grid 01',
  fields: [
    // {
    //   title: 'Title',
    //   name: 'title',
    //   type: 'string'
    // },
    // {
    //   name: 'tileColor',
    //   title: 'Tile Color',
    //   type: 'string',
    //   description: 'Set background color of tile.  Leave blank to use default background color.',
    //   options: {
    //     list: [
    //       {title: 'Transparent', value: 'transparent'},
    //       {title: 'White', value: 'white'},
    //       {title: 'Black', value: 'black'},
    //       {title: 'Solo', value: 'solo-yellow'},
    //       {title: 'Duet', value: 'duet-red'},
    //       {title: 'Ensemble', value: 'ensemble-blue'},
    //       {title: 'Orchestra', value: 'orchestra-green'}
    //     ],
    //     layout: 'radio'
    //   }
    // },
    // {
    //   name: 'description',
    //   type: 'bodyPortableText',
    //   title: 'Grid Description'
    // },
    // {
    //   name: 'cta',
    //   type: 'cta',
    //   title: 'CTA'
    // },
    {
      title: 'Grid Items',
      name: 'gridItems',
      description: 'Add tiles to the grid',
      type: 'array',
      of: [
        {
          type: 'tileAbout',
          title: 'About Tile'
        },
        {
          type: 'tileBasic',
          title: 'Basic Tile'
        },
        {
          type: 'tileDescription',
          title: 'Description Tile'
        },
        {
          type: 'tileLocation',
          title: 'Location Tile'
        },
        {
          type: 'pageBuilderColumns',
          title: 'Slider Tile'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare () {
      return {
        title: 'Grid 01'
      }
    }
  }
}
