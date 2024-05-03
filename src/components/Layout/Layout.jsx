import React from 'react'
import Style from './Layout.module.css'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <div className="container">
      <Outlet></Outlet>
    </div>
    </>
  )
}

export default Layout