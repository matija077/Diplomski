import React from 'react';

import './projectDetails.style.scss';

class ProjectDetails extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    componentDidMount() {
        fetch(`/projects/project/last/id=${this.props.id}`, {
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
                    projects: data,
                    fetched: true,
                }
            );
            console.log(data);
        }.bind(this))
        .catch(function rejected(error) {
            console.log(error);
        });

    }

    render() {

        return (
            <div>Ola</div>
        );
    }

}

export default ProjectDetails;

