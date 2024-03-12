import React from 'react'
import Navbar from './Common/Navbar'
import Footer from './Common/Footer'

export default function Layout({children}) {
  return <div>
    <Navbar/>
    {children}
    <Footer/>
  </div>
}