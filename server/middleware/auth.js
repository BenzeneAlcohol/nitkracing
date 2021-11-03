const jwt = require('jsonwebtoken');

const User = require('../models/User');
const dotenv = require('dotenv');
dotenv.config();

exports.auth = async (req, res, next) => {
    let token;
    if(
      	req.headers.authorization &&
      	req.headers.authorization.startsWith('Bearer')
    ) {
      	token = req.headers.authorization.split(' ')[1];
    }
    if(!token) {
        return res.status(403).json({
            success: false,
            error: "unauthenticated access",
        });
    }
    try {
      	jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err) {
                throw err;
            } else {
                model = req.originalUrl.split('/')[2];
                protectedModels = ['sponsors', 'members', 'auth', 'achievements'];
                // console.log(req.method);
                if(req.method == 'GET' || protectedModels.indexOf(model) == -1) {
                    next();
                }
                else {
                    User.findOne({decoded})
                        .then((user) => {
                            if(user.permissions.indexOf(model) != -1) {
                                next();
                            }
                            else {
                                res.status(403).json({
                                    success: false,
                                    error: "unauthorized access",
                                });
                            }
                        })
                        .catch((e) => {
                            throw(e);
                        })            
                    ;
                }
            }
        });
    } catch(err) {
        res.status(500).json({
            success: false,
            error: err.message,
        });
    }
};