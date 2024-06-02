import React from 'react'
import Style from './Layout.module.css'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

function Layout() {
  return (
    <>
    <Sidebar/>
    <div className="container">
      <Outlet></Outlet>
    </div>
    </>
  )
}

export default Layout