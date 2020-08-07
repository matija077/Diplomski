var contractDocuments = {
    note: {
        indices: [{
            properties: [{ "$ownerId": "asc" }], unique: false },
        ],
        properties: {
            message: {
                type: "string"
            }
        },
        additionalProperties: false
    }
};

var contractDocuments2 = {
    user: {
        indices: [{
            properties: [{ "$ownerId": "asc" }], unique: false },
        ],
        properties: {
            id: {
                type: "string",
                minLength: 10,
                maxLength: 20,
                description: "id autoamticaly generated"
            },
            name: {
                type: "string",
                minLength: 2,
                maxLength: 20,
                description: "full name"
            }
        },
        required: [
            "id",
            "name"
        ],
        additionalProperties: false
    },
    project: {
        indices: [{
            properties: [{ "$ownerId": "asc" }], unique: false },
        ],
        properties: {
            id: {
                type: "string",
                minLength: 10,
                maxLength: 20,
                description: "id autoamticaly generated"
            },
            name: {
                type: "string",
                minLength: 2,
                maxLength: 20,
                description: "full name"
            },
            description: {
                type: "string",
                minLength: 10,
                description: "descprition"
            }
        },
        required: [
            "id",
            "name"
        ],
        additionalProperties: false
    }
};

module.exports = {
    contractDocuments,
    contractDocuments2
};
