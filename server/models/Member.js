const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
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
    head: {
        type: Boolean
    },
    linkedin: {
        type: String
    },
    instagram: {
        type: String
    },
    email: {
        type: String,
    },
    bio: {
        type: String,
        required: true
    },
    gradyear: {
        type: Number,
    },
})

const Member = mongoose.model('Member', memberSchema);
module.exports = Member;