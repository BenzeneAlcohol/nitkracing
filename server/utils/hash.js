const bcrypt = require('bcryptjs');

exports.hash = async function hash(str) {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(str, salt);
    return hashed;
}