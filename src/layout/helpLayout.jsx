import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HelpLayout = () => {
  return (
    <div className="help-layout">
        
        <h2>Website Help</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas debitis quibusdam deserunt repellat hic molestias ipsum commodi aut odit!</p>

        <nav>
            <NavLink to="faq"> FAQ</NavLink>
            <NavLink to="contact"> Contact</NavLink>
            
        </nav>

        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default HelpLayout