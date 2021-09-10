export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  fieldsets: [{name: 'footer', title: 'Footer'}],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site Title'
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url'
    },
    // {
    //   name: 'homepage',
    //   type: 'reference',
    //   description: 'Choose page to be the homepage',
    //   to: {type: 'homePage'}
    // },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.'
    },
    {
      name: 'rhLogo',
      title: 'Logo',
      type: 'array',
      of: [
        {
          type: 'image'
        }
      ]
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      title: 'Main navigation',
      name: 'mainNavigation',
      description: 'Select from array of menus for the top menu',
      validation: Rule => [
        Rule.max(5).warning('Are you sure you want more than 5 items?'),
        Rule.unique().error('You have duplicate menu items')
      ],
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'nav'}]
        }
      ]
    },
    {
      title: 'Footer navigation items',
      name: 'footerNavigation',
      type: 'array',
      validation: Rule => [
        Rule.unique().error('You have duplicate menu items')
      ],
      fieldset: 'footer',
      of: [
        {
          type: 'reference',
          to: [{type: 'nav'}]
        }
      ]
    },
    {
      name: 'social',
      type: 'array',
      fieldset: 'footer',
      of: [
        {
          type: 'imgLink'
        }
      ]
    },
    {
      name: 'footerText',
      type: 'bodyPortableText',
      fieldset: 'footer'
    },
    {
      name: 'contactText',
      type: 'bodyPortableText',
      fieldset: 'footer'
    },
    {
      name: 'sponsorText',
      type: 'bodyPortableText',
      fieldset: 'footer'
    },
    {
      name: 'sponsorLogos',
      type: 'array',
      of: [
        {
          type: 'imgLink'
        }
      ],
      fieldset: 'footer'
    }
  ]
}
