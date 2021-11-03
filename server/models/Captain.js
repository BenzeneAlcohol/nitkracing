const mongoose = require('mongoose');

const captainSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
    },
    cloudinary_id: {
        type: String,
        select: false
    },
    subsystem: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    linkedin: {
        type: String
    },
    instagram: {
        type: String
    },
    bio: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gradyear: {
        type: Number,
        required: true
    }
})

const Captain = mongoose.model('Captain', captainSchema);
module.exports = Captain;