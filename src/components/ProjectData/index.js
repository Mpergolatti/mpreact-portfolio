import React from 'react';


function ProjectData(props) {
  return(
    
      <div className='main_div'>
        {props.project.map((project) => (
          
            <div>
              <div className='image_div'>
                <figure className='image_box'>
                  <a href={project.live} target='_blank' rel="noopener noreferrer" >

                    <img src={project.images} className='project_picture' alt='Placeholder' />

                  </a>
                </figure>
              </div>
              <div className='info_div'>
                <p className='' key={project.id}>
                  {project.title}
                </p>
                <p>
                {project.description}
                </p>
                <br />
                Languages: {project.languages}
                <br />
                Packages used: {project.packages}
                <br />
                <div>
                  <a href={project.repo}>Repo</a>
                </div>
              </div>
            </div>
          
        ))}
      </div>
    
  )
}

export default ProjectData