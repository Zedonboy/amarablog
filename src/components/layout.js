/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import logo from "../images/logo.png"
const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle="Title" />
      {children}
      <footer className="flex flex-col md:flex-row items-center text-white justify-evenly bg-pink-dark dark:bg-gray-900 font-sans">
        <div className="flex flex-col">
          <a href="/">
            <img className="mt-4 ml-16" width="50" src={logo} />
          </a>
          <footer className="flex p-2 justify-around">
            <a className="text-gray-500 hover:text-emerald-500">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
            <a className="text-gray-500 hover:text-emerald-500">
              <i class="fab fa-facebook fa-2x"></i>
            </a>
            <a className="text-gray-500 hover:text-emerald-500">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
          </footer>
        </div>
        <div className="text-center dark:text-white">
          <h1>Designed with <i class="fas text-red-600 fa-heart fa-2x"></i></h1>
          <h1>By</h1>
          <a href="https://twitter.com/dtc_inc" className="text-emerald-400 font-semibold hover:underline">DecTek Softwares</a>
        </div>
        <div>
        <nav role="navigation" className="block dark:bg-gray-900 bg-pink-dark w-full p-1">
        <ul className="flex nav text-white flex-col justify-center">
          
          <li>
            <a className="item p-4 m-auto block relative" href="/">
              Home
            </a>
          </li>
          {/* <li>
            <a className="item p-4 m-auto block relative" href="/about_me">
              About Me
            </a>
          </li>
          <li>
            <a className="item p-4 m-auto block relative" href="/contact">
              Contact
            </a>
          </li> */}
        </ul>
      </nav>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
