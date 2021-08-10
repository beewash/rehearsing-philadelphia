import {GiMusicalScore} from 'react-icons/gi'

export default {
  name: 'performances',
  title: 'Performances',
  type: 'document',
  icon: GiMusicalScore,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Date',
      name: 'performanceDate',
      type: 'date',
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Location',
      name: 'performanceLocation',
      type: 'reference',
      to: [{type: 'locations'}],
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Performance Type',
      name: 'performanceType',
      description: 'Pick one performance type associated with this performance',
      type: 'reference',
      to: [{type: 'performanceModules'}]
    },
    {
      title: 'Credits',
      name: 'credits',
      type: 'array',
      of: [{type: 'reference',
        to: [{type: 'people'}]
      }]
    }
  ]
}
