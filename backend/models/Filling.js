const mongoose = require('mongoose');

const fillingSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: false
    },
    serviceName: {
        type: String,
        required: false
    },
    disputeFor: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    companyType: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Filling', fillingSchema);
