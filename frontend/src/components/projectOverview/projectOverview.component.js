import React from 'react';

import {Link} from 'react-router-dom';

import ProjectDetails from '../projectDetails/projectDetails.component';

import './projectOverview.style.scss';

function ProjectOverview({project}) {
    return (
        <div className="project-properties">
            <h1
                className="title"
                onClick={() => console.log("clicked")}
            >{ project.data.name }</h1>
            <div>
                <span className="name">Deadline</span>
                <span className="number"> { project.data.deadline }</span>
            </div>
            <div className="data-holder">
                <span className="name">Time of creation</span>
                <span className="number"> { JSON.stringify(project.data.timeOfCreation) }</span>
            </div>
            <textarea readOnly className="description">
                {project.data.description}
            </textarea>
        </div>
    );
}

export default ProjectOverview;