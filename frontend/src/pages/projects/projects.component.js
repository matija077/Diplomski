import React from 'react';

import './projects.style.scss';

class Projects extends React.Component {
    constructor () {
        super();

        this.state = {

        };
    }

    componentDidMount() {
        /*fetch('/test', {
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
            console.log(JSON.parse(data));
        })
        .catch(function rejected(error) {
            console.log(error);
        });*/
        fetch('/projects', {
            method: 'get',
            headers: {'Content-Type': 'application/json'},
        })
        .then(function resolved(response) {
            return response.json();
        })
        .then(function jsonData(data) {
            console.log("radi?");
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