import React from "react"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from '@contentful/rich-text-types';

import Layout from "../components/layout"
import "./blog.css"



const Blog = props => {

    const options = {
        renderNode: {
            [BLOCKS.HEADING_1]: (node, children) => (<h1 style={{ fontFamily: `Fugaz One`, textTransform: `uppercase` }}>{children}</h1>),
            [BLOCKS.HEADING_2]: (node, children) => (<h2 style={{ fontFamily: `Fugaz One`, textTransform: `uppercase`, display: `inline-block`, background: `#63C04C`, padding: `.5rem` }}>{children}</h2>),
            [BLOCKS.HEADING_3]: (node, children) => (<h3 style={{ fontFamily: `Fugaz One`, textTransform: `uppercase` }}>{children}</h3>),
            [BLOCKS.HEADING_4]: (node, children) => (<h4 style={{ fontFamily: `Fugaz One`, textTransform: `uppercase` }}>{children}</h4>),
            [BLOCKS.OL_LIST]: (node, children) => (<ol>{children}</ol>),
            [BLOCKS.PARAGRAPH]: (node, children) => (<p style={{ fontFamily: `Roboto` }}>{children}</p>),
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const image = node.data.target.fields.file['en-US']
                const width = image.details.image.width
                return <Img width={image.details.image.width} fluid={{
                    aspectRatio: width / image.details.image.height,
                    src: image.url + '?w=630&q=80',
                    srcSet: ` 
                  ${image.url}?w=${width / 4}&&q=80 ${width / 4}w,
                  ${image.url}?w=${width / 2}&&q=80 ${width / 2}w,
                  ${image.url}?w=${width}&&q=80 ${width}w,
                  ${image.url}?w=${width * 1.5}&&q=80 ${width * 1.5}w,
                  ${image.url}?w=1000&&q=80 1000w,
              `,
                    sizes: '(max-width: 630px) 100vw, 630px'
                }} />
            }
        }
    }
    return (
        <Layout>
            <div className="px-3">
                <h1 style={{ color: "#63C04C", marginTop: `1rem`, fontFamily: `Fugaz One`, textTransform: `uppercase` }}>{props.pageContext.title}</h1>
                <div style={{ color: "white" }} > {documentToReactComponents(props.pageContext.richText, options)}</div>
            </div>
        </Layout>
    )
}

export default Blog