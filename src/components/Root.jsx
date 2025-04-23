import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div>
        <Header/>
        <div className="container" style={{minHeight:"100vh"}}>
            <Outlet />
        </div>
        <Footer/>
    </div>
  )
}

export default Root