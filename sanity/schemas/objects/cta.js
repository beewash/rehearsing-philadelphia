export default {
  name: 'cta',
  type: 'object',
  title: 'Call To Action',
  fields: [
    {
      name: 'linkText',
      type: 'string',
      title: 'Link Text'
    },
    {
      name: 'linkTo',
      type: 'link',
      title: 'Link'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare () {
      return {
        title: 'CTA'
      }
    }
  }
}
