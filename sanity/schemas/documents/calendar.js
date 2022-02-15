import {AiOutlineCalendar} from 'react-icons/ai'

export default {
  name: 'calendar',
  type: 'document',
  title: 'Calendar',
  icon: AiOutlineCalendar,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'bodyPortableText'
    },
    {
      name: 'month',
      title: 'Month',
      type: 'string',
      options: {
        list: [
          {title: 'March', value: 'march'},
          {title: 'April', value: 'april'}
        ]
      }
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date'
    },
    {
      name: 'time',
      title: 'Time',
      type: 'string'
    }
  ]
}
