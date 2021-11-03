const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    verified: {
        type: Boolean,
        default: false
    }
});

const Subscription = mongoose.model('Subscription', SubscriptionSchema);

module.exports = Subscription;