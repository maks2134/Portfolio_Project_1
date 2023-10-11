import React from 'react';
import Project01 from "../../img/projects/01.jpg";
import "./style.css"
const Project = ({title, img}) => {
    return (
        <div>
            <li className="project">
                <a href="./project-page.html">
                    <img
                        src={img}
                        alt={title}
                        className="project__img"
                    />
                    <h3 className="project__title">{title}</h3>
                </a>
            </li>
        </div>
    );
};

export default Project;