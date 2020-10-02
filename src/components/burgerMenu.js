import React from "react"


import "./burgerMenu.css"

const BurgerMenu = ({ menuHandler }) => {
    return (
        <button
            className="inline-block space-y-2 h-6 w-5 bg-transparent mr-5 lg:hidden"
            onClick={menuHandler}
        >
            <div className="line" />
            <div className="line" />
            <div className="line" />
        </button>
    )
}

export default BurgerMenu