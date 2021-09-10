export default {
  name: 'imgLink',
  type: 'object',
  title: 'Image Link',
  fields: [
    {
      title: 'Link Text',
      name: 'linkText',
      type: 'string'
    },
    {
      title: 'Link',
      name: 'link',
      type: 'link'
    },
    {
      title: 'Image',
      name: 'thumbNail',
      type: 'image'
    }
  ],
  preview: {
    select: {
      title: 'linkText',
      media: 'thumbNail'
    },
    prepare ({title, media}) {
      return {
        title,
        media
      }
    }
  }
}
