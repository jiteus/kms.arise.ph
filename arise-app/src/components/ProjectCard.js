import React from 'react';

const ProjectCard = ({
    project_title,
    project_poc,
    project_pocnum,
    project_pocemail,
    project_type,
    project_status,
    project_desc,
    sdgt_name,
    project_location,
    }) => {
    return (
        
        <div className='bg-light-green dib br2 pa2 ma1 grow bw2 shadow-5'>
            <div>
                
                <h1>{project_title}</h1>
                <em><h2>A {project_type} {project_status} for {sdgt_name} </h2></em>
                <h3>Location: {project_location}</h3>
                <p>{project_desc}</p>
                <p>Contact {project_poc} at {project_pocnum} or {project_pocemail} </p>
            </div>
        </div>
    );
}

export default ProjectCard;