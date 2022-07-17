import React from 'react'

const Project = ({ title, description }) => {
  return (
    <>
    <div className='projectList'>
          <h1>{title}</h1>
          <h3>{description}</h3>
    </div>
    </>
  )
}

export default Project;