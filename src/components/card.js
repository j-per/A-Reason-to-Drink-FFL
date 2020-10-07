import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import "./card.css"

const Card = ({ title, date, slug, cardImage }) => {
  return (
    <BackgroundImage
      Tag="section"
      fluid={cardImage}
      backgroundColor={`transparent`}
      className="col-span-6 md:col-span-3 shadow"
    >
      <div className="px-3 py-2 card_wrapper flex flex-col justify-between bg-black bg-opacity-25 h-full">
        <h2 className="font-bold mb-2 text-white uppercase text-4xl card_heading">
          <Link to={`/posts/${slug}`}>{title}</Link>
        </h2>
        <div>
          <p className="text-white text-base my-0">
            <strong>{date}</strong>
          </p>
          <p className="text-white text-base my-0">
            <strong>Mike Q.</strong>
          </p>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Card
