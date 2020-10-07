import React from "react"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"

import Layout from "../components/layout"

const Blog = props => {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="uppercase">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="uppercase">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="uppercase">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="uppercase">{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className="uppercase">{children}</h5>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal">{children}</ol>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ol className="list-disc">{children}</ol>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p style={{ fontFamily: `Roboto` }}>{children}</p>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <a className="underline cursor-pointer" href={node.data.uri}>
          {children}
        </a>
      ),
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const image = node.data.target.fields.file["en-US"]
        const width = image.details.image.width
        return (
          <Img
            className="mb-5"
            width={image.details.image.width}
            fluid={{
              aspectRatio: width / image.details.image.height,
              src: image.url + "?w=630&q=80",
              srcSet: ` 
                  ${image.url}?w=${width / 4}&&q=80 ${width / 4}w,
                  ${image.url}?w=${width / 2}&&q=80 ${width / 2}w,
                  ${image.url}?w=${width}&&q=80 ${width}w,
                  ${image.url}?w=${width * 1.5}&&q=80 ${width * 1.5}w,
                  ${image.url}?w=1000&&q=80 1000w,
              `,
              sizes: "(max-width: 630px) 100vw, 630px",
            }}
          />
        )
      },
    },
  }
  return (
    <Layout>
      <SEO title={props.pageContext.title} />
      <div>
        <h1
          style={{
            color: "#63C04C",
            marginTop: `1rem`,
            fontFamily: `Fugaz One`,
            textTransform: `uppercase`,
          }}
        >
          {props.pageContext.title}
        </h1>
        <div style={{ color: "white" }}>
          {" "}
          {documentToReactComponents(props.pageContext.richText, options)}
        </div>
      </div>
    </Layout>
  )
}

export default Blog
