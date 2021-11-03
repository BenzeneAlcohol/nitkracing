const dotenv = require('dotenv');
dotenv.config();

exports.isAdmin = async (req, res, next) => {
    let token;
    if(
      	req.headers.authorization &&
      	req.headers.authorization.startsWith('Bearer')
    ) {
      	token = req.headers.authorization.split(' ')[1];
    }
    if(token == process.env.ADMIN_ACCESS_TOKEN) {
        next();
    }
    else {
        res.status(403).json({
            success: false,
            error: "unauthorized access",
        });
    }
};