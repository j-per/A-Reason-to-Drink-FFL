const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blog = path.resolve(`src/templates/blog.js`)
    return graphql(`
    query MyQuery {
        allContentfulFantasyFootball {
          edges {
            node {
              childContentfulFantasyFootballMainRichTextNode {
                json
              }
              title
              postDate(formatString: "MMMM DD, YYYY")
              slug
            }
          }
        }
      }
    `,
        { limit: 1000 }
    ).then(result => {
        if (result.errors) {
            throw result.errors
        }

        result.data.allContentfulFantasyFootball.edges.forEach(edge => {
            createPage({
                path: `posts/${edge.node.slug}`,
                component: blog,
                context: {
                    title: edge.node.title,
                    date: edge.node.postDate,
                    slug: edge.node.slug,
                    richText: edge.node.childContentfulFantasyFootballMainRichTextNode.json
                },
            })
        })
    })
}
