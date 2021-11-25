import React from "react";
import ProjectCard from "./ProjectCard";


const ProjectList = ({projects}) =>{
    
    return (
        <div className='featured'>
            {
                projects.map((project,i) => {
                    return (
                        <ProjectCard
                            key={i}
                            id={projects[i].id}
                            project_title={projects[i].project_title}
                            project_poc={projects[i].project_poc}
                            project_pocnum={projects[i].project_pocnum}
                            project_pocemail={projects[i].project_pocemail}
                            project_type={projects[i].project_type}
                            project_status={projects[i].project_status}
                            project_desc={projects[i].project_desc}
                            sdgt_name={projects[i].sdgt_name}
                            project_location={projects[i].project_location}
                            project_tstart={projects[i].project_tstart}
                            project_tend={projects[i].project_tend}
                            project_astart={projects[i].project_astart}
                            project_aend={projects[i].project_aend}
                            project_tpeople={projects[i].project_tpeople}
                            project_apeople={projects[i].project_apeople}
                            project_memorg={projects[i].project_memorg}
                            
                        />
                    ); 
                })
            }
        </div>
    );
}

export default ProjectList;