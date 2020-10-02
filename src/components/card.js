import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

import "./card.css"

const Card = ({ title, date, slug, cardImage }) => {
    return (
        <div className="m-2 sm:w-1/2 shadow card_wrapper">
            <BackgroundImage
                Tag="section"
                fluid={cardImage}
                backgroundColor={`transparent`}
                className="bg_image"
            >
                <div className="px-3 py-2 bg-black bg-opacity-25">
                    <h3 className="font-bold mb-2 text-white uppercase underline inline-block">
                        <Link to={`/posts/${slug}`}>
                            {title}
                        </Link>
                    </h3>
                    <p className="text-white text-base mb-2">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Here is some more content to fill the card...
                </p>
                    <div className="flex">
                        <div className="flex justify-start flex-col">
                            <p className="text-white text-base my-0">
                                {date}
                            </p>
                            <p className="text-white text-base my-0">Mike Q.</p>
                        </div>
                    </div>
                </div >
            </BackgroundImage>
        </div >
    )
}

export default Card;