import {AiOutlineCalendar} from 'react-icons/ai'

export default {
  name: 'calendar',
  type: 'document',
  title: 'Calendar',
  icon: AiOutlineCalendar,
  preview: {
    select: {
      title: 'location',
      module: 'title',
      date: 'date',
      time: 'time'
    },
    prepare (selection) {
      const {title, module, date, time} = selection
      return {
        title,
        subtitle: `${module}: ${date}, ${time}`
      }
    }
  },
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
      name: 'location',
      title: 'Location',
      type: 'string'
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
    },
    {
      name: 'module',
      title: 'Module',
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
      name: 'icon',
      title: 'Icon',
      type: 'mainImage'
    }
  ]
}
