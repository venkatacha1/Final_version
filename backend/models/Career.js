const mongoose = require('mongoose');

const careerSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        mobile: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        resumePath: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Career = mongoose.model('Career', careerSchema);

module.exports = Career;
