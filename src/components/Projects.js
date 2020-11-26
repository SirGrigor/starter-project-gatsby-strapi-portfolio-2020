import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import index from "../pages"
const Projects = ({projects, title, showLink}) => {
  return <section className='section project'>
    <Title title={title}/>
    <div className='services-center project-center'>
      {projects.map((project,index)=>{
        return <Project key={project.id} index={index} {...project}/>
      })}
    </div>
    {
      showLink && (<Link to="/project" className='btn center-btn'>
        projects
      </Link>)
    }
  </section>
}

export default Projects
