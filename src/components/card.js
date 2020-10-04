import React from "react"
import { Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

import "./card.css"

const Card = ({ title, date, slug, cardImage }) => {
    return (
        // <div className="m-2 col-span-6 md:col-span-2 shadow card_wrapper">
        <BackgroundImage
            Tag="section"
            fluid={cardImage}
            backgroundColor={`transparent`}
            className="col-span-6 md:col-span-3 shadow"
        >
            <div className="px-3 py-2 card_wrapper flex flex-col justify-around bg-black bg-opacity-35 h-full">
                <h3 className="font-bold mb-2 text-white uppercase underline">
                    <Link to={`/posts/${slug}`}>
                        {title}
                    </Link>
                </h3>
                <p className="text-white text-base mb-2">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Here is some more content to fill the card...
                </p>
                <div>
                    <p className="text-white text-base my-0">
                        <strong>
                            {date}
                        </strong>
                    </p>
                    <p className="text-white text-base my-0"><strong>Mike Q.</strong></p>
                </div>
            </div >
        </BackgroundImage>
    )
}

export default Card;