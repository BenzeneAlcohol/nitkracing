const mongoose = require('mongoose');

const SponsorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    // validity: {
    //     type: Date,
    //     required: true,
    // },
    website: {
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
    tier: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

const Sponsor = mongoose.model('Sponsor', SponsorSchema);

module.exports = Sponsor;