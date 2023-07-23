import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const CareerDetails = () => {
    const {id} = useParams()
    const career = useLoaderData()
  return (
    <div className="career-details">
            <p>Career Details: {career.title}</p>
            <p>Stating Salary: {career.salary}</p>
            <p>location: {career.location}</p>
            <div className='details'>
                Jov details: 
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas velit facere illum quo eaque perspiciatis suscipit porro nesciunt alias eos corporis placeat quam iste maxime distinctio dignissimos repudiandae ipsa aperiam corrupti voluptatibus itaque, nihil incidunt a. Delectus nulla eos, eius dolorem vitae ea commodi explicabo. Non maxime modi libero fugit!</p> 
            </div>
    </div>
  )
}

export default CareerDetails


export const CareerDetailsLoader = async ({params})=>{
    const {id} = params    
    const res = await fetch('http://localhost:4000/careers/'+ id)
    if (!res.ok) {
      throw Error ('Could not find the page');
    }
    return res.json()
}