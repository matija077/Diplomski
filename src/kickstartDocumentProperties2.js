var DocumentProperties = require('./documentProperties');

function KickstartDocumentProperties2(id, name) {
    DocumentProperties.call(this);

    this.id = id;
    this.name = id;
}

KickstartDocumentProperties2.prototype = Object.create(
    DocumentProperties.prototype
);
KickstartDocumentProperties2.prototype.constructor = KickstartDocumentProperties2;

Object.setPrototypeOf(KickstartDocumentProperties2, DocumentProperties);


function UserProperties(id, name) {
    KickstartDocumentProperties2.call(this, id ,name);
}

UserProperties.prototype = Object.create(
    KickstartDocumentProperties2.prototype
);
UserProperties.prototype.constructor = UserProperties;

Object.setPrototypeOf(UserProperties, KickstartDocumentProperties2);


function ProjectProperties(id, name, description) {
    KickstartDocumentProperties2.call(this, id ,name);

    this.description = description;
}

ProjectProperties.prototype = Object.create(
    KickstartDocumentProperties2.prototype
);
ProjectProperties.prototype.constructor = ProjectProperties;

Object.setPrototypeOf(ProjectProperties, KickstartDocumentProperties2);


module.exports = {
    ProjectProperties,
    UserProperties
};