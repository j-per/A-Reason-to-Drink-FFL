import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query MyQuery {
    allContentfulFantasyFootball(sort: {fields: postDate, order: DESC}) {
      edges {
        node {
          postDate(formatString: "MMMM DD, YYYY")
          slug
          title
          id
          cardImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`)
  return (
    <Layout>
      <SEO title="Home" description="A Fantasy Football Blog" />
      <div className="grid grid-cols-6 gap-3">
        {
          data.allContentfulFantasyFootball.edges.map(edge => <Card key={edge.node.id} title={edge.node.title} date={edge.node.postDate} slug={edge.node.slug} cardImage={edge.node.cardImage.fluid} />)
        }
      </div>
    </Layout>
  )
}

export default IndexPage
