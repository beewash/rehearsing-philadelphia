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
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'personName',
        maxLength: 96
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
      name: 'pageBuilder',
      type: 'pageBuilder',
      title: 'Page Builder'
    },
    {
      name: 'bio',
      type: 'bodyPortableText',
      title: 'Bio'
    },
    {
      name: 'hoverColor',
      title: 'Hover Color',
      type: 'string',
      options: {
        list: [
          {title: 'Solo', value: 'solo-yellow'},
          {title: 'Duet', value: 'duet-red'},
          {title: 'Ensemble', value: 'ensemble-blue'},
          {title: 'Orchestra', value: 'orchestra-green'}
        ],
        layout: 'radio'
      }
    },
    {
      name: 'social',
      title: 'Social',
      type: 'array',
      of: [{type: 'socialLinks'}]
    },
    {
      title: 'Website/Portfolio',
      name: 'website',
      type: 'navItem'
    },
    {
      title: 'Tags',
      name: 'tags',
      description: 'Add all appropriate modules.',
      type: 'array',
      of: [{type: 'reference',
        to: [{type: 'performanceModules'}]}]
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
