import {MdLocalOffer} from 'react-icons/md'

export default {
  name: 'performanceModules',
  title: 'The Modules',
  type: 'document',
  icon: MdLocalOffer,
  preview: {
    select: {
      title: 'moduleName',
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
      name: 'moduleName',
      type: 'string',
      title: 'Module Name'
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Module Description'
    },
    {
      name: 'performanceIcon',
      type: 'mainImage',
      title: 'Icon'
    }
  ]
}
