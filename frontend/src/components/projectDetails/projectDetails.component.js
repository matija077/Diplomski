import React from 'react';
import {connect} from 'react-redux';

import './projectDetails.style.scss';

import Funder from '../funder/funder.component';

class ProjectDetails extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            project: null,
            fetched: false,
        }
    }

    componentDidMount() {
        console.log(this.props);
        fetch(`/projects/project/last/${this.props.match.params.projectID}/${this.props.userIndex}`, {
            method: 'get',
            headers: {'Content-Type': 'application/json'},
        })
        .then(function resolved(response) {
            return response.json();
        })
        .then(function jsonData(data) {
            var newState = {
                fetched: true,
                project: data
            };

            this.setState(
                newState,
                () => console.log(this.state)
            );
        }.bind(this))
        .catch(function rejected(error) {
            console.log(error);
        });

    }

    render() {
        var {project, fetched} = this.state;
        var render = false;
        if (project) {
            if (project.length > 0) {
                render = true;
                project = project[0];
            }
        }

        console.log(render);
        console.log(project);

        return (
            <div className="project-details-placeholder">
                {fetched ? (
                render ?  (
                    <div className="project-details">
                        <div className="data-holder">
                            <span className="name">project ID</span>
                            <span className="number">{project.data.projectID}</span>
                        </div>
                        <div className="data-holder">
                            <span className="name">project funds</span>
                            <span className="number">{project.data.funds}</span>
                        </div>
                        <div className="data-holder">
                            <span className="name">number of donations</span>
                            <span className="number">{project.data.payerNumber}</span>
                        </div>
                        <div className="payers-placeholder">
                            <h2 className="payers-heading">Funders</h2>
                            {
                                project.data.funders.length > 0 ?
                                    project.data.funders.map((funder, index) => (
                                        <div className="payers" >
                                            <p className="payer-index">{index}</p>
                                            <Funder key={funder.payerID} funder={funder}></Funder>
                                        </div>
                                    ))
                                :
                                    null
                            }
                        </div>
                    </div>
                    )
                :
                    null
                ) :
                <p> ckeaj</p>
                }
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        userIndex: state.user.userNumber
    }
}

export default connect(mapStateToProps)(ProjectDetails);

