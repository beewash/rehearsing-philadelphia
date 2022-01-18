import {FaQuestion} from 'react-icons/fa'

export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  icon: FaQuestion,
  preview: {
    select: {
      title: 'question'
    },
    prepare ({title}) {
      return {
        title
      }
    }
  },
  fields: [
    {
      title: 'Question',
      name: 'question',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Answer',
      name: 'answer',
      type: 'bodyPortableText',
      validation: (Rule) => Rule.required()
    }
  ]
}
