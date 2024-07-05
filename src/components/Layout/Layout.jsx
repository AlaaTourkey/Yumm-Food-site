import React from 'react'
import Style from './Layout.module.css'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

function Layout() {
  return (
    <>
    <div className="w-25">

    <Sidebar/>
    </div>
    <div className="container w-75">
      <Outlet></Outlet>
    </div>
    </>
  )
}

export default Layout