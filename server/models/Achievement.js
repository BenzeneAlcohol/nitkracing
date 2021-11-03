const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        default: null,
    },
    cloudinary_id: {
        type: String,
        select: false
    },
    description: {
        type: String,
    }
})

const Achievement = mongoose.model('Achievement', achievementSchema);
module.exports = Achievement;