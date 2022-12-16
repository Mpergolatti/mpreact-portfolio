import React from 'react';


function ProjectData(props) {
  return(
    
      <div className='main_div'>
        {props.project.map((project) => (
          
            <div className='whole_card'>
              <div className='image_div'>
                <figure className='image_box'>
                  <a href={project.live} target='_blank' rel="noopener noreferrer" className='images'>

                    <img src={project.images} className='project_picture' alt='Placeholder' />

                  </a>
                </figure>
              </div>
              <div className='info_div'>
                <p className='p_title' key={project.id}>
                  {project.title}
                </p>
                <p>
                {project.description}
                </p>
                <br />
                <div className='lang_pack'>
                Languages -- {project.languages}
                <br />
                Packages Used -- {project.packages}
                <br />
                </div>
                <div className='repo_div'>
                  <br />
                  <a href={project.repo} className='repo'>GitHub Repository</a>
                </div>
              </div>
            </div>
          
        ))}
      </div>
    
  )
}

export default ProjectData