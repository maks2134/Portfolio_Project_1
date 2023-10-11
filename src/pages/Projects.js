import React from 'react';
import Project01 from  '../img/projects/01.jpg'
import Project02 from  '../img/projects/02.jpg'
import Project03 from  '../img/projects/03.jpg'
import Project04 from  '../img/projects/04.jpg'
import Project05 from  '../img/projects/05.jpg'
import Project06 from  '../img/projects/06.jpg'
import Project from "../components/project/Project";
import {projectsList} from  "../helpers/projects-list"

const Projects = () => {
    return (
        <>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Projects</h2>
                    <ul className="projects">
                        {projectsList.map((projectic,index)=>{
                            return <Project key={index} title={projectic.title} img={projectic.img} />;
                        })}
                    </ul>
                </div>
            </main>

        </>
    );
};

export default Projects;