import PropTypes from "prop-types"
import React from "react"
import { useState } from "react"
import logo from "../images/logo.png"
import SwitchBox from "./SwitchBox"
const Header = ({ siteTitle }) => {
  const [expand, setExpand] = useState(false)
  return (
    <header className="font-sans">
      <nav className="hidden sm:block bg-pink-dark dark:bg-gray-900 w-full h-16 p-1 flex w-full">
        <div className="w-full md:w-7/12 flex">
          <ul className="ml-16 justify-self-start nav flex text-white">
            <li>
              <a href="/">
                <img className="" width="50" src={logo} />
              </a>
            </li>
            <li>
              <a className="item p-4 m-auto block relative" href="/">
                Home
              </a>
            </li>
            {/* <li>
              <a className="item p-4 m-auto block relative" href="/post">
                Post
              </a>
            </li>
            <li>
              <a className="item p-4 m-auto block relative" href="/author">
                Author
              </a>
            </li>
            <li>
              <a className="item p-4 m-auto block relative" href="/tag">
                Tag
              </a>
            </li> */}
            <li className="flex justify center items-center">
              <span>DarkMode</span>&nbsp;&nbsp;<SwitchBox onChange={e => {
                let html = document.getElementsByTagName("html").item(0)
                html.classList.toggle("dark")
              }}/>
            </li>
          </ul>
        </div>
      </nav>
      <nav
        role="navigation"
        className={`block sm:hidden dark:bg-gray-900 overflow-hidden transition-all ease-out duration-1000 bg-pink-dark ${
          expand ? "" : "h-16"
        } w-full p-1`}
      >
        <ul className="flex nav text-white flex-col justify-center">
          <li className="flex items-center h-14 justify-between">
            <div></div>
            <div>
              <a href="/">
                <img width="50" src={logo} />
              </a>
            </div>
            <a
              href="javascript:void(0)"
              onClick={e => {
                if (expand) {
                  setExpand(false)
                } else setExpand(true)
              }}
              className="mr-4"
            >
              <i class={`fas ${expand ? "fa-times" : "fa-bars"} fa-2x`}></i>
            </a>
          </li>
          <li>
            <a className="item p-4 m-auto block relative" href="/">
              Home
            </a>
          </li>
          {/* <li>
            <a className="item p-4 m-auto block relative" href="/post">
              Post
            </a>
          </li>
          <li>
            <a className="item p-4 m-auto block relative" href="/tag">
              Tag
            </a>
          </li>
          <li>
            <a className="item p-4 m-auto block relative" href="/author">
              Author
            </a>
          </li> */}
          <li className="flex justify center items-center">
              <span>DarkMode</span>&nbsp;&nbsp;<SwitchBox onChange={e => {
                let html = document.getElementsByTagName("html").item(0)
                html.classList.toggle("dark")
              }}/>
            </li>
        </ul>
      </nav>
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
