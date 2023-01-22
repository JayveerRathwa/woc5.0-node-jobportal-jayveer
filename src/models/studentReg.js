const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    gender: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },

    age: {
        type: Number,
        required: true
    },

    batch: {
        type: Number,
        required: true
    },

    cpi: {
        type: Number,
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
const student = new mongoose.mongoose.model("student", studentSchema);

module.exports = student;