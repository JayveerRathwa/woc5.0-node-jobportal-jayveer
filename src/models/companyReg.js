const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },

    officialWebsite: {
        type: String,
        required: true,
        unique: true
    },

    jobPosition: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    batch: {
        type: Number,
        required: true
    },

    requiredcpi: {
        type: Number,
        required: true
    },

    package: {
        type: Number,
        required: true
    },

    jobDescription: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    confirmPassword: {
        type: String,
        required: true
    }
});

//Creating a collection
const company = new mongoose.mongoose.model("company", companySchema);

module.exports = company;