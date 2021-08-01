import {BsPeopleCircle} from 'react-icons/bs'

export default {
  name: 'people',
  title: 'People',
  type: 'document',
  icon: BsPeopleCircle,
  preview: {
    select: {
      title: 'personName',
      media: 'headshot',
      subtitle: 'title'
    },
    prepare ({title, media, subtitle}) {
      return {
        title,
        media,
        subtitle
      }
    }
  },
  fields: [
    {
      title: 'Name',
      name: 'personName',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      title: 'slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'personName',
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    },
    {
      title: 'Headshot',
      name: 'headshot',
      type: 'mainImage',
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Role list',
      name: 'roleList',
      description: 'Used for internal indexing',
      type: 'array',
      of: [{type: 'roleObject'}]
    },
    {
      title: 'Title',
      name: 'title',
      description: 'Persons official title.  Examples: Technology Consultant, Marketing Coordinator, Cellist, Composer, etc.',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'bioPortableText',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'socialLinks',
      type: 'socialLinks'
    },
    {
      title: 'Website/Portfolio',
      name: 'website',
      type: 'string'
    },
    {
      title: 'Tags',
      name: 'tags',
      description: 'Add all appropriate performance types.',
      type: 'array',
      of: [{type: 'reference',
        to: [{type: 'performanceCat'}]}]
    },
    {
      title: 'List of Performances',
      name: 'performanceList',
      description: 'Add all performances associated with this person',
      type: 'array',
      of: [{type: 'performanceObject'}]
    }
  ]
}
