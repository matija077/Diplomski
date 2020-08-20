import React from 'react';

import './projects.style.scss';
import ProjectOverview from '../../components/projectOverview/projectOverview.component';
import Loading from '../../components/loading/loading.component';

class Projects extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            projects: [],
            fetched: false,
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
        var {projects, fetched} = this.state;
        console.log(projects.length);

        return (
            <div className="projects">
                {
                    projects.length > 0 ?
                        projects.map((project) => (
                            <ProjectOverview key={project.id} project={project}>

                            </ProjectOverview>
                        ))
                    :
                            <Loading></Loading>
                }

            </div>
        );
    }
}


export default Projects;