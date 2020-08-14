var DocumentProperties = require('../documentProperties');

function KickstartDocumentProperties(id) {
    DocumentProperties.call(this);

    this.projectID = id.substr(0, 32);
}

KickstartDocumentProperties.prototype = Object.create(
    DocumentProperties.prototype
);
KickstartDocumentProperties.prototype.constructor = KickstartDocumentProperties;

Object.setPrototypeOf(KickstartDocumentProperties, DocumentProperties);


function ProjectOverviewProperties(id, name, deadline, description) {
    KickstartDocumentProperties.call(this, id);

    this.name = name;
    this.deadline = deadline;
    this.description = description;
}

ProjectOverviewProperties.prototype = Object.create(
    KickstartDocumentProperties.prototype
);
ProjectOverviewProperties.prototype.constructor = ProjectOverviewProperties;

Object.setPrototypeOf(ProjectOverviewProperties, KickstartDocumentProperties);


function ProjectProperties(id,funds = 0, goals, rewards) {
    KickstartDocumentProperties.call(this, id);

    this.funds = funds;
    this.goals = goals;
    this.rewards = rewards;
}

ProjectProperties.prototype = Object.create(
    KickstartDocumentProperties.prototype
);
ProjectProperties.prototype.constructor = ProjectProperties;

Object.setPrototypeOf(ProjectProperties, KickstartDocumentProperties);


module.exports = {
    ProjectProperties,
    ProjectOverviewProperties
};