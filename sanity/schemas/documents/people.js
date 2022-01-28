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
      subtitle: 'roleList'
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
      name: 'pageBuilder',
      type: 'pageBuilder',
      title: 'Page Builder'
    },
    {
      title: 'Role list',
      name: 'roleList',
      description: 'Used for internal indexing',
      type: 'string'
    },
    {
      title: 'Module',
      name: 'moduleList',
      type: 'string',
      options: {
        list: [
          {title: 'Solo', value: 'solo'},
          {title: 'Duet', value: 'duet'},
          {title: 'Ensemble', value: 'ensemble'},
          {title: 'Orchestra', value: 'orchestra'}
        ],
        layout: 'radio'
      }
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      options: {
        list: [
          {title: 'Transparent', value: 'transparent'},
          {title: 'White', value: 'white'},
          {title: 'Black', value: 'black'},
          {title: 'Solo', value: 'solo-yellow'},
          {title: 'Duet', value: 'duet-red'},
          {title: 'Ensemble', value: 'ensemble-blue'},
          {title: 'Orchestra', value: 'orchestra-green'}
        ]
      }
    },
    {
      name: 'hoverColor',
      title: 'Hover Color',
      type: 'string',
      options: {
        list: [
          {title: 'Transparent', value: 'transparent'},
          {title: 'White', value: 'white'},
          {title: 'Black', value: 'black'},
          {title: 'Solo', value: 'solo-yellow'},
          {title: 'Duet', value: 'duet-red'},
          {title: 'Ensemble', value: 'ensemble-blue'},
          {title: 'Orchestra', value: 'orchestra-green'}
        ]
      }
    },
    {
      name: 'rosterColor',
      title: 'Roster Color',
      type: 'string',
      options: {
        list: [
          {title: 'Solo', value: 'solo-yellow'},
          {title: 'Duet', value: 'duet-red'},
          {title: 'Ensemble', value: 'ensemble-blue'},
          {title: 'Orchestra', value: 'orchestra-green'}
        ]
      }
    },
    {
      name: 'social',
      title: 'Social',
      type: 'array',
      of: [{type: 'imgLink'}]
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
    }
  ]
}
