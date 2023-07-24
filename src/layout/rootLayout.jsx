import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import BreadCrumbs from '../components/breadCrumbs'

const RootLayout = () => {
  return (
    <>
        <header>
             <nav>
                 <h1>Hello</h1>
                 <NavLink to="/">Home</NavLink>
                 <NavLink to="about">about</NavLink>
                 <NavLink to="help">Help</NavLink>
                 <NavLink to="careers">Careers</NavLink>
               </nav>
        </header>

    <BreadCrumbs />
    <main>
        <Outlet />
    </main>

    </>
  )
}

export default RootLayout