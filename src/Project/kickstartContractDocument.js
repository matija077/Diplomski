var kickstartContractDocument = {
    /**
     * user:
     *  id
     *  ownProjects: [id list]
     *  donating project {id, funds}
     */
project: {
    indices: [
        {
            properties: [{ "projectID": "asc" }]
        },
        {
            properties: [{ "funds": "desc" }]
        },
        {
            properties: [{ "payerNumber": "desc" }]
        }
    ],
    properties: {
        projectID: {
            type: "string",
            description: "project id",
            minLength: 32,
            maxLength: 32,
        },
        funds: {
            type: "number",
            description: "funds gathered sofar"
        },
        payerNumber:{
            type: "integer",
            description: "index of payer"
        },
        funders: {
            type: "array",
            description: "all funders",
            items: {
                type: "object",
                properties: {
                    payerID: {
                        type: "string",
                        description: "payer's ID",
                        minLength: 44,
                        maxLength: 44
                    },
                    timestamp: {
                        $ref: "#/definitions/timestamp"
                    },
                    payerName: {
                        type: "string",
                        description: "payer's name",
                        maxLength: 63,
                    },
                    payment: {
                        type: "integer",
                        description: "one payment"
                    }
                },
                required: [
                    "payerID", "payerName", "timestamp", "payment"
                ],
                additionalProperties: false,
            }
        },
    },
    required: ["projectID", "funds", "payerNumber"],
    additionalProperties: false,
},
projectOverview: {
    indices: [
        {
            properties: [
                { "$ownerId": "asc" },
            ],
        },
        {
            properties: [
                { "projectID": "asc" }
            ],
            "unique": true,
        },
        {
            properties: [
                { "deadline": "asc" }
            ]
        },
        {
            properties: [
                { "ownerName": "asc" }
            ]
        },
    ],
    properties: {
        name: {
            type: "string",
            description: "project name",
            minLength: 2,
            maxLength: 100
        },
        projectID: {
            type: "string",
            description: "project",
            minLength: 31,
            maxLength: 32,
        },
        deadline: {
            type: "number",
            description: "days until project has to be completed",
            minimum: 10,
            maximum: 730,
        },
        description: {
            type: "string",
            minLength: 10,
            description: "project description"
        },
        timeOfCreation: {
            $ref: "#/definitions/timestamp"
        },
        ownerName: {
            type: "string",
            maxLength: 63,
            description: "owner's name"
        },
        goals: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    name:{
                        type: "string",
                        minLength: 2,
                        maxLength: 100,
                        description: "goal name"
                    },
                    description: {
                        type: "string",
                        maxLength: 400,
                        description: "goal description"
                    }
                },
                required: [
                    "name", "description", "funds"
                ],
                additionalProperties: false,
            }
        },
        rewards: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    name:{
                        type: "string",
                        minLength: 2,
                        maxLength: 100,
                        description: "reward name"
                    },
                    description: {
                        type: "string",
                        maxLength: 400,
                        description: "reward description"
                    },
                    users: {
                        type: "array",
                        items: {
                            type: "string",
                            minLength: 34,
                            maxLength: 34,
                        }
                    }
                },
                required: [
                    "name", "description"
                ],
                additionalProperties: false,
            }
        },
    },
    required: ["name", "projectID", "deadline", "timeOfCreation"],
    additionalProperties: false,
}
};

var kickstartDefinitions = {
    timestamp: {
        type: "object",
        properties: {
            day: {
                type: "string",
                minLength: 1,
                maxLength: 2,
            },
            month: {
                type: "string",
                minLength: 1,
                maxLength: 2,
            },
            year: {
                type: "string",
                minLength: 4,
                maxLength: 4,
            },
            second: {
                type: "string",
                minLength: 1,
                maxLength: 2,
            },
            minute: {
                type: "string",
                minLength: 1,
                maxLength: 2,
            },
            hour: {
                type: "string",
                minLength: 1,
                maxLength: 2,
            }
        },
        additionalProperties: false
    }
};

module.exports = {
    kickstartContractDocument,
    kickstartDefinitions
};









































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































