import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
        <header>
             <nav>
                 <h1>Hello</h1>
                 <NavLink to="/">Home</NavLink>
                 <NavLink to="about">about</NavLink>
                 <NavLink to="help">Help</NavLink>
               </nav>
        </header>

    <main>
        <Outlet />
    </main>

    </>
  )
}

export default RootLayout