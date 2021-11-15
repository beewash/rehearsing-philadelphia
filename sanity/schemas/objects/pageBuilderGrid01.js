export default {
  name: 'pageBuilderGrid01',
  type: 'object',
  title: 'Grid 01',
  fields: [
    {
      title: 'Section Title',
      name: 'sectionTitle',
      type: 'string'
    },
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
          type: 'tileArtist',
          title: 'Artist Spotlight Tile'
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
      title: 'sectionTitle'
    },
    prepare ({title}) {
      return {
        title
      }
    }
  }
}
