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
      name: 'documents',
      title: 'Documents',
      type: 'array',
      of: [{type: 'moduleDocuments'}]
    }
  ]
}
