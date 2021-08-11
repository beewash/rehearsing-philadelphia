export default {
  name: 'socialLinks',
  type: 'object',
  fields: [
    {
      title: 'Link Text',
      name: 'linkText',
      type: 'string'
    },
    {
      title: 'Link',
      name: 'socialLink',
      type: 'link'
    },
    {
      title: 'Social Icon',
      name: 'socialIcon',
      type: 'image'
    }
  ],
  preview: {
    select: {
      title: 'linkText',
      media: 'socialIcon'
    },
    prepare ({title, media}) {
      return {
        title,
        media
      }
    }
  }
}
