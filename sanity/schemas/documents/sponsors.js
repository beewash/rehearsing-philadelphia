import {FaHandshake} from 'react-icons/fa'

export default {
  name: 'sponsors',
  title: 'Sponsors',
  type: 'document',
  icon: FaHandshake,
  fields: [
    {
      name: 'sponsorName',
      title: 'Name of Sponsor',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'sponsorLogo',
      title: 'Logo',
      type: 'mainImage',
      validation: (Rule) => Rule.required()
    }
  ]
}
