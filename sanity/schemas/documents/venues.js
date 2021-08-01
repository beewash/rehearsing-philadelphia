import {MdLocationCity} from 'react-icons/md'

export default {
  name: 'venues',
  title: 'Venues',
  type: 'document',
  icon: MdLocationCity,
  fields: [
    {
      name: 'venue',
      title: 'Venue',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'venueImage',
      type: 'mainImage',
      title: 'Image',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'venueDes',
      type: 'bodyPortableText',
      title: 'Venue Description',
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
