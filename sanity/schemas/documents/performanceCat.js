import {MdLocalOffer} from 'react-icons/md'

export default {
  name: 'performanceCat',
  title: 'Performance Category',
  type: 'document',
  icon: MdLocalOffer,
  preview: {
    select: {
      title: 'category',
      media: 'performanceIcon'
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
      name: 'category',
      type: 'string',
      title: 'Category'
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'excerptPortableText'
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Category Description'
    },
    {
      name: 'performanceIcon',
      type: 'mainImage',
      title: 'Icon'
    }
  ]
}
