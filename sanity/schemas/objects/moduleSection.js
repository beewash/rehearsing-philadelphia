export default {
  title: 'Module Section',
  name: 'moduleSection',
  type: 'object',
  fields: [
    {
      name: 'moduleName',
      type: 'string',
      title: 'Module Name'
    },
    {
      name: 'icon',
      type: 'mainImage',
      title: 'Module Icon'
    },
    {
      name: 'documents',
      title: 'Documents',
      type: 'array',
      of: [{type: 'moduleDocuments'}]
    }
  ]
}
