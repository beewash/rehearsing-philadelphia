export default {
  title: 'Module Documents',
  name: 'moduleDocuments',
  type: 'object',
  fields: [
    {
      name: 'docName',
      type: 'string',
      title: 'Document Name'
    },
    {
      name: 'externalContent',
      type: 'boolean',
      title: 'Content is from an external source'
    },
    {
      name: 'document',
      type: 'file',
      title: 'Document'
    },
    {
      name: 'externalLink',
      type: 'string',
      title: 'External Link'
    }
  ]
}
