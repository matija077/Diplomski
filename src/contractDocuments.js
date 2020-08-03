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

module.exports = contractDocuments;
