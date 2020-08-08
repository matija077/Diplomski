var projectContractDocument = {
    projects: {
        indices: [],
        properties: {},
        required: [],
        additionalProperties: false,
    },
    userProjects: {
        indices: [],
        properties: {
            projectList: {
                type: "array",
                description: "list of user projects",
            },

        },
        required: [],
        additionalProperties: false,
    },
    project: {
        indices: [],
        properties: {
            ...{$ref: "#/definitions/project"}
        },
        required: [],
        additionalProperties: false,
    }
};

var projectDefinitions = {
    project: {
        type: "object",
        properties: {},
        required: [],
        additionalProperties: false,
    }
};

module.exports = {
    projectContractDocument,
    projectDefinitions
};