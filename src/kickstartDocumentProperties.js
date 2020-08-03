var DocumentProperties = require('./documentProperties');

function KickstartDocumentProperties(message) {
    DocumentProperties(this);

    this.message = message;
}

KickstartDocumentProperties.prototype = Object.create(
    DocumentProperties.prototype
);
KickstartDocumentProperties.prototype.constructor = KickstartDocumentProperties;

Object.setPrototypeOf(KickstartDocumentProperties, DocumentProperties);

module.exports = KickstartDocumentProperties;
