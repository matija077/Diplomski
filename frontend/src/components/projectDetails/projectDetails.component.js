import React from 'react';
import {connect} from 'react-redux';

import './projectDetails.style.scss';

class ProjectDetails extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
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
                    projects: data,
                    fetched: true,
                }
            );
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

function mapStateToProps(state) {
    return {
        userIndex: state.user.userNumber
    }
}

export default connect(mapStateToProps)(ProjectDetails);

