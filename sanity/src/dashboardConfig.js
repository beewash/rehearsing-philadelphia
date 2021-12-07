export default {
  widgets: [
    {
      name: 'project-users',
      layout: {
        width: 'small'
      }
    },
    {
      name: 'structure-menu',
      layout: {
        width: 'medium'
      }
    },
    {
      name: 'document-list',
      options: {
        title: 'Recently created pages',
        order: '_createdAt desc',
        types: ['page']
      },
      layout: {
        width: 'medium'
      }
    },
    {
      name: 'project-info',
      options: {
        // __experimental_before: [
        //   {
        //     name: 'netlify',
        //     options: {
        //       description:
        //         'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
        //       sites: [
        //         {
        //           buildHookId: '',
        //           title: 'Sanity Studio',
        //           name: '',
        //           apiId: '',
        //         },
        //       ],
        //     },
        //   },
        // ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/beewash/rehearsing-philadelphia',
            category: 'Code'
          }
          // Add your own hosted website url here if you'd like a quick link to the frontend
          // {title: 'Frontend', value: 'https://jaydanurwin.com', category: 'apps'}
        ],
        layout: {
          width: 'medium'
        }
      }
    },
    {
      name: 'vercel',
      layout: {
        width: 'large'
      }
    }
  ]
}
