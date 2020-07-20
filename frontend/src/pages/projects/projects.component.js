import React from 'react';

import './projects.style.scss';

class Projects extends React.Component {
    constructor () {
        super();

        this.state = {

        };
    }

    componentDidMount() {
        fetch('/test', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                test: "test",
            })
        })
        .then(function resolved(response) {
            return response.json();
        })
        .then(function jsonData(data) {
            console.log(data);
        })
        .catch(function rejected(error) {
            console.log(error);
        });
    }

    render() {

        return (
            <h1>
                Projects
            </h1>
        );
    }
}

export default Projects;