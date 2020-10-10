import React from "react"
import { Link } from "gatsby"

import "./sidedrawer.css"

const SideDrawer = ({ menuHandler, open }) => {
  let showSideDrawer
  if (open) {
    showSideDrawer = "shadow sideDrawer_wrapper closed open"
  } else {
    showSideDrawer = "shadow sideDrawer_wrapper closed"
  }
  return (
    <nav
      className={`${showSideDrawer} flex flex-col items-center text-white font-bold uppercase bg-blue-900`}
    >
      <button onClick={menuHandler}>
        <svg viewBox="0 0 24 24" className="close_svg">
          <path
            d="M 2 2 L 22 22 M 2 22 L22 2"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        </svg>
      </button>
      <Link
        to="/"
        onClick={menuHandler}
        className="mt-5 p-1 transition duration-300 ease-in-out hover:text-footballgreen"
      >
        Staging Test
      </Link>
      <Link
        to="/winners"
        onClick={menuHandler}
        className="mt-5 p-1 transition duration-300 ease-in-out hover:text-footballgreen"
      >
        Winners
      </Link>
      <Link
        to="/stats"
        onClick={menuHandler}
        className="mt-5 p-1 transition duration-300 ease-in-out hover:text-footballgreen"
      >
        Stats
      </Link>
    </nav>
  )
}

export default SideDrawer
