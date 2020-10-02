import React from "react"
import { Link } from "gatsby"

import "./sidedrawer.css"

const SideDrawer = ({ menuHandler, open }) => {
    let showSideDrawer;
    if (open) {
        showSideDrawer = "shadow sideDrawer_wrapper closed open";
    } else {
        showSideDrawer = "shadow sideDrawer_wrapper closed";
    }
    return (
        <nav className={`${showSideDrawer} flex flex-col items-center text-white font-bold uppercase bg-blue-900`}>
            <button onClick={menuHandler}>
                <svg viewBox="0 0 24 24" className="close_svg">
                    <path d="M 2 2 L 22 22 M 2 22 L22 2" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                </svg>
            </button>
            <Link to="/" onClick={menuHandler} className="mt-5 p-1 transition duration-300 ease-in-out hover:text-footballgreen">Home</Link>
            <Link to="/page-2" onClick={menuHandler} className="mt-5 p-1 transition duration-300 ease-in-out hover:text-footballgreen">Page 2</Link>
            <Link to="/" onClick={menuHandler} className="mt-5 p-1 transition duration-300 ease-in-out hover:text-footballgreen">Winners</Link>
            <Link to="/" onClick={menuHandler} className="mt-5 p-1transition duration-300 ease-in-out hover:text-footballgreen">Stats</Link>
        </nav>
    )
}

export default SideDrawer