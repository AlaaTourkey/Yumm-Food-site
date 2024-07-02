import React, { useRef } from 'react'
import Style from './Sidebar.module.css'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../assets/logo.png"
function Sidebar() {

const sidebar = useRef(null)
const innerSidebar = useRef(null)
const sidebarIcon = useRef(null)

function changeStatus() {
  let left = window.getComputedStyle(sidebar.current).getPropertyValue("left")
  if (left == "0px") {
    closeSidebar()
  }
  else{
    openSidebar()
  }
}
function closeSidebar() {
  let width = innerSidebar.current.offsetWidth
  sidebar.current.style.left = `-${width}px`
  sidebarIcon.current.classList.replace("fa-xmark","fa-bars")
}
function openSidebar() {
  sidebar.current.style.left = "0px"
  sidebarIcon.current.classList.replace("fa-bars","fa-xmark")

}

  return (
    <>
      <nav ref={sidebar} className={` ${Style.sidebar} d-flex    text-white`}>
        <div ref={innerSidebar} className="inner-sideBar  d-flex flex-column justify-content-between bg-black py-2 px-3 text-white">
          <ul className={`list-unstyled  overflow-hidden ${Style.ulLinks}`}>
            <li  >
              <NavLink onClick={()=>closeSidebar()} className='nav-link  my-3 p-1' to="/home">Home</NavLink >
            </li>
            <li >
              <NavLink onClick={()=>closeSidebar()} className='nav-link  my-3 p-1' to="/category">Categories</NavLink >
            </li>
            <li >
              <NavLink onClick={()=>closeSidebar()} className='nav-link  my-3 p-1' to="/search">Search</NavLink>
            </li>
            <li >
              <NavLink onClick={()=>closeSidebar()} className='nav-link  my-3 p-1' to="/ingredients">Ingredients</ NavLink>
            </li>
            <li >
              <NavLink onClick={()=>closeSidebar()} className='nav-link  my-3 p-1' to="/contact">Contact Us</NavLink >
            </li>
          </ul>

          <div className="footer-innerSideBar">

            <div className="socialIcons d-flex">
              <div className="social-icon mx-1">
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div className="social-icon mx-1">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="social-icon mx-1">
                <i className="fa-solid fa-globe"></i>
              </div>
            </div>
            <p>Copyright Â© 2019 All Rights <br></br> Reserved.</p>

          </div>

        </div>
        <div className="sidbar-logos py-3 px-2 text-black bg-white  align-items-center d-flex flex-column justify-content-between">
          <div className={`${Style.sideBarLogo} `}>
            <Link to='/'>
              <img className="w-100" src={logo} alt="" />
            </Link>
          </div>
          <div onClick={()=>changeStatus()} className=" sideBar-Icon-Toggle  py-1 cursor-pointer">
            <i  ref={sidebarIcon} className="fa-solid  fa-bars fa-2x"></i>
          </div>
          <div className="sideBar-share-icon">
            <div className="shareIcon">
              <i className="fa-solid fa-globe "></i>
            </div>
            <div className="shareIcon">
              <i className="fa-solid fa-share-nodes"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Sidebar