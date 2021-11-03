const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const {hash} = require('../utils/hash');
const dotenv = require('dotenv');
dotenv.config();

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    name: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        // required: true
    },
    permissions: [{
        type: String,
    }]
});

UserSchema.pre('save', async function(next) {
    this.password = await hash(this.password);
    next();
});

UserSchema.methods.matchPasswords = async function(password) {
    return await bcrypt.compare(password, this.password);
}

UserSchema.methods.getSignedToken = function() {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {expiresIn: '200h'});
}

const User = mongoose.model('User', UserSchema);

module.exports = User;