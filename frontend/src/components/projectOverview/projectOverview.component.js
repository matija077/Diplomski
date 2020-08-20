import React from 'react';

import {Link} from 'react-router-dom';

import ProjectDetails from '../projectDetails/projectDetails.component';

import './projectOverview.style.scss';

function ProjectOverview({project}) {
    console.log(project);
    return (
        <div className="project-properties">
            <Link
                className="title"
                to={{
                    pathname: `/projects/${project.data.projectID}`
                    }}
            >{ project.data.name }</Link>
            <div>
                <span className="name">Project Owner</span>
                <span className="owner">{project.data.ownerName}</span>
            </div>

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