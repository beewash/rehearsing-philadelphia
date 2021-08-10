import {MdLocationCity} from 'react-icons/md'

export default {
  name: 'locations',
  title: 'Locations',
  type: 'document',
  icon: MdLocationCity,
  preview: {
    select: {
      title: 'location',
      media: 'locationImage'
    },
    prepare ({title, media}) {
      return {
        title,
        media
      }
    }
  },
  fields: [
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'locationImage',
      type: 'mainImage',
      title: 'Image',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'locationDescription',
      type: 'bodyPortableText',
      title: 'Location Description',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'performanceList',
      title: 'List of performances',
      type: 'array',
      of: [{type: 'performanceObject'}],
      options: {
        layout: 'list'
      }
    },
    {
      name: 'peopleList',
      title: 'List of performers',
      type: 'array',
      of: [{type: 'reference',
        to: [{type: 'people'}]
      }]
    }
  ]
}
