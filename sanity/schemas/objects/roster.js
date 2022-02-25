export default {
  name: 'roster',
  title: 'Roster',
  type: 'object',
  fields: [
    {
      name: 'module',
      title: 'Module',
      type: 'string',
      options: {
        list: [
          {title: 'Solo', value: 'solo'},
          {title: 'Duet', value: 'duet'},
          {title: 'Ensemble', value: 'ensemble'},
          {title: 'Orchestra', value: 'orchestra'}
        ]
      }
    },
    {
      name: 'summary',
      title: 'Summary',
      description: 'Optional text to describe what this section is about.',
      type: 'bodyPortableText'
    },
    {
      title: 'Artists',
      name: 'artists',
      description: 'Add all appropriate artists for this list.',
      type: 'array',
      of: [{type: 'reference',
        to: [{type: 'people'}]}]
    }
  ],
  preview: {
    select: {
      title: 'module',
      artists: 'artists'
    },
    prepare ({artists = [], title}) {
      return {
        title: title.charAt(0).toUpperCase() + title.slice(1),
        subtitle: artists.length === 1 ? `1 Column` : `${artists.length} Artists`
      }
    }
  }
}
