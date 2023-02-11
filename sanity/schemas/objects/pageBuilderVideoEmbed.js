export default {
  name: 'pageBuilderVideoEmbed',
  type: 'object',
  title: 'Video Embed',
  preview: {
    prepare () {
      return {
        title: 'Video Embed'
      }
    }
  },
  fields: [
    {
      title: 'Video URL',
      name: 'videoUrl',
      type: 'string',
      description: 'Past video URL from YouTube.  Must include the "v" param (i.e. "https://www.youtube.com/watch?v=IcWWSjvf28o")',
      validation: Rule => Rule.required()
    }
  ]
}
