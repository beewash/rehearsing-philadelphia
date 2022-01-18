export default {
  name: 'pageBuilderFAQ',
  title: 'FAQ',
  type: 'object',
  fields: [
    {
      name: 'faqItems',
      title: 'FAQ Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'faq'}]
        }
      ]
    }
  ],
  preview: {
    select: {
      faqItems: 'faqItems'
    },
    prepare ({faqItems = []}) {
      const titles = []
      faqItems.forEach(item => titles.push(item.question))
      return {
        title: faqItems.length === 1 ? `1 FAQ Item` : `${faqItems.length} FAQ Items`
      }
    }
  }
}
