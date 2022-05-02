export default {
  name: 'mainImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      options: {
        isHighlighted: true
      }
    },
    {
      title: 'Module',
      name: 'moduleList',
      type: 'string',
      options: {
        isHighlighted: true,
        list: [
          {title: 'Solo', value: 'solo'},
          {title: 'Duet', value: 'duet'},
          {title: 'Ensemble', value: 'ensemble'},
          {title: 'Orchestra', value: 'orchestra'}
        ],
        layout: 'radio'
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
