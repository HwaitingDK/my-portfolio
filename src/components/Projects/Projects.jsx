import React from 'react'
import Project from '../Project/Project';

const Projects = () => {
  const projects = [{
    title: 'Support desk',
    description: 'This is suport desk which is made to provide support the users.'
  }, {
    title: 'Github Finder',
    description: "Github Finder is app which is used to find github folks",
  }];

  return (
    <>
      <h1>Projects</h1>
      {
        projects.map((project) => (
          <Project title={project.title} description={project.description}/>
        ))
      }
    </>
  )
}

export default Projects;