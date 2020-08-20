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


function ProjectOverviewProperties(id, name, deadline, description,
    timeOfCreation, goals, rewards, ownerName) {
    KickstartDocumentProperties.call(this, id);

    this.name = name;
    this.deadline = deadline;
    this.description = description;
    this.timeOfCreation = timeOfCreation;
    this.goals = goals;
    this.rewards = rewards;
    this.ownerName = ownerName;
}

ProjectOverviewProperties.prototype = Object.create(
    KickstartDocumentProperties.prototype
);
ProjectOverviewProperties.prototype.constructor = ProjectOverviewProperties;

Object.setPrototypeOf(ProjectOverviewProperties, KickstartDocumentProperties);


function ProjectProperties(id,funds = 0, timestamp, name) {
    KickstartDocumentProperties.call(this, id);

    this.funds = funds;
    this.timestamp = timestamp;
    this.name = name;
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