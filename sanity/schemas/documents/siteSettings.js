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
    {
      name: 'frontpage',
      type: 'reference',
      description: 'Choose page to be the frontpage',
      to: {type: 'page'}
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.'
    },
    {
      name: 'Logo',
      type: 'mainImage',
      title: 'Main image'
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
      name: 'footerText',
      type: 'excerptPortableText',
      fieldset: 'footer'
    },
    {
      name: 'author',
      type: 'reference',
      description: 'Publish an author and set a reference to them here.',
      title: 'Author',
      to: [{type: 'author'}]
    }
  ]
}
