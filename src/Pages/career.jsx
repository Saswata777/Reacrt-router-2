import React from 'react'
import { Link, useLoaderData } from "react-router-dom"

const Career = () => {
  const careers = useLoaderData()

  return (
    <div className='careers'>
        Home
          {careers.map(career => (
        <Link to='/' key={career.id}>
          <p> {career.title}</p>
          <p> Based in {career.location} </p>
        </Link>
      ))}
    </div>
  )
}

export default Career


// you can define this function any of the file no necessary to define here, but import to the app.js and pass into loader prop. <Route index element = {<Career />} loader={<careerLoader/>}/> 
export const CareerLoader = async ()=>{
  const res = await fetch('http://localhost:4000/careers');
  return res.json();
}