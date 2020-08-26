import React from 'react';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import ProjectDetails from '../projectDetails/projectDetails.component';
import {selectCurrentUserNumber} from '../../redux/user/user.selectors';

import './projectOverview.style.scss';

function ProjectOverview({project, currentUserIndex}) {
    //console.log(currentUserIndex);

    function buyReward(reward) {
        if (!currentUserIndex) {
            return;
        }

        var data = {
            payment: {
                name: reward.name,
                payment: reward.price
            }
        };
        console.log(JSON.stringify(data));

        fetch(`/projects/project/fund/${project.data.projectID}/${currentUserIndex}`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    }

    return (
        <div className="project-properties">
            <Link
                className="title"
                to={{
                    pathname: `/projects/${project.data.projectID}`
                    }}
            >{ project.data.name }</Link>
            <div className="data-holder">
                <span className="name">Project Owner</span>
                <span className="owner">{project.data.ownerName}</span>
            </div>

            <div className="data-holder">
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
            <div className="rewards-placeholder">
                {
                    project.data.rewards.length > 0 ?
                        project.data.rewards.map((reward, index) => (
                            <div className="rewards">
                                <div>{reward.description}</div>
                                <button onClick={() => buyReward(reward)}>
                                    {reward.name} : {reward.price}
                                </button>
                            </div>
                        ))
                    :
                        null
                }
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUserIndex: selectCurrentUserNumber
});

export default connect(mapStateToProps)(ProjectOverview);