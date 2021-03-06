import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import BurgerMenu from "./burgerMenu"
import SideDrawer from "./sidedrawer"
import "./header.css"

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-blue-900 shadow-xl mb-3 flex items-center justify-between">
      <div className="py-3 ml-5">
        <h1 className="mb-0 header_h1 text-white uppercase  inline-block">
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
      <div className="lg:block hidden">
        <ul className="m-0 uppercase text-white font-bold header_ul">
          <Link
            to="/"
            className="mr-5 transition duration-300 ease-in-out hover:text-footballgreen"
          >
            Home
          </Link>
          <Link
            to="/winners"
            className="mr-5 transition duration-300 ease-in-out hover:text-footballgreen"
          >
            Winners
          </Link>
          <Link
            to="/stats"
            className="mr-5 transition duration-300 ease-in-out hover:text-footballgreen"
          >
            Stats
          </Link>
        </ul>
      </div>
      <BurgerMenu
        menuHandler={() => {
          setOpen(!open)
        }}
      />
      <SideDrawer
        menuHandler={() => {
          setOpen(!open)
        }}
        open={open}
      />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
