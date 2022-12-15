import React from 'react';


function ProjectData(props) {
  return(
    <div>
      <div>
        {props.project.map((project) => (
          <div>
            <div>
              <div>
                <figure>
                  <a href={project.live} target='_blank' rel='noreferrer'>

                    <img src={project.images} alt='Placeholder' />

                  </a>
                </figure>
              </div>
              <div>
                <p className='' key={project.id}>
                  {project.title}
                </p>
                {project.description}
                <br />
                Languages: {project.languages}
                <br />
                Packages used: {project.packages}
                <br />
                <div>
                  <a href={project.repo} target='_blank'>Repo</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectData