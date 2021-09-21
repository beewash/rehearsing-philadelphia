export default {
  title: 'Documents',
  name: 'docAttachment',
  type: 'object',
  fields: [
    {
      name: 'docName',
      type: 'string',
      title: 'Document Name'
    },
    {
      name: 'document',
      type: 'file',
      title: 'Document'
    },
    {
      name: 'externalContent',
      type: 'boolean',
      title: 'Content is from an external source'
    },
    {
      name: 'externalLink',
      type: 'string',
      title: 'External Link'
    }
  ]
}
