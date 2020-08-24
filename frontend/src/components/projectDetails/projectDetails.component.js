import React from 'react';
import {connect} from 'react-redux';

import './projectDetails.style.scss';

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
            console.log(data);
            this.setState(
                {
                    project: data[0],
                    fetched: true,
                },
                () => console.log(this.state)
            );
        }.bind(this))
        .catch(function rejected(error) {
            console.log(error);
        });

    }

    render() {
        var {project, fetched} = this.state;
        console.log(project);

        return (
            <div className="project-details-placeholder">
                {fetched ? (
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
                    <div className="payers">
                        {
                            project.data.funders.length > 0 ?
                                project.data.funders.map((funder, index) => (
                                    <div>
                                        {index}
                                    </div>
                                ))
                            :
                                null
                        }
                    </div>
                </div>
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

