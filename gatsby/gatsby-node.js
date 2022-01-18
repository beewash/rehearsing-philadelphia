const {isFuture} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const {format} = require('date-fns')

async function createSanityPage (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPage(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const pageEdges = (result.data.allSanityPage || {}).edges || []

  pageEdges
    .forEach((edge, index) => {
      const {id, slug = {}} = edge.node
      const path = `/${slug.current}/`
      console.log(path)

      createPage({
        path,
        component: require.resolve('./src/templates/page.js'),
        context: {id}
      })
    })
}

async function createSanityPeople (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPeople(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const peopleEdges = (result.data.allSanityPeople || {}).edges || []

  peopleEdges
    .forEach((edge, index) => {
      const {id, slug = {}} = edge.node
      const path = `/${slug.current}/`
      console.log(path)

      createPage({
        path,
        component: require.resolve('./src/templates/people.js'),
        context: {id}
      })
    })
}

// async function createSanityPerformance (graphql, actions) {
//   const {createPage} = actions
//   const result = await graphql(`
//     {
//       allSanityPerformances(filter: { slug: { current: { ne: null } } }) {
//         edges {
//           node {
//             id
//             slug {
//               current
//             }
//           }
//         }
//       }
//     }
//   `)

//   if (result.errors) throw result.errors

//   const performanceEdges = (result.data.allSanityPerformances || {}).edges || []

//   performanceEdges
//     .forEach((edge, index) => {
//       const {id, slug = {}} = edge.node
//       const path = `/${slug.current}/`
//       console.log(path)

//       createPage({
//         path,
//         component: require.resolve('./src/templates/performances.js'),
//         context: {id}
//       })
//     })
// }

exports.createPages = async ({graphql, actions}) => {
  await createSanityPage(graphql, actions)
  await createSanityPeople(graphql, actions)
  // await createSanityPerformance(graphql, actions)
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = `/app/*`

    // Update the page.
    createPage(page)
  }
}
