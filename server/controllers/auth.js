const User = require('../models/User');

const sendToken = (user, statusCode, res) => {
    console.log('sending token...');
    const token = user.getSignedToken();
    const id = user._id;
    res.status(statusCode).json({ token, id });
}

const format = {
    'id': '$_id',
    'email': 1,
    'name': 1,
    'permissions': 1,
    'username': 1,
}

exports.getUsers = async(req, res) =>{
    User.find({}, format)
        .then((data) => {
            res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
            res.setHeader('Content-Range', data.length); 
            res.status(200).json(data)
        })
        .catch((e) => {
            res.status(500).json({
                success: false,
                error: e.message
            })
        })
    ;
}

exports.register = async (req, res, next) => {
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        permissions: req.body.permissions
    };
    User.create(user)
        .then((user) => {
            User.findOne({_id: user._id}, format)
                .then((data) => {
                    res.status(201).json(data);
                })
            ;
        })
        .catch((e) => {
            res.status(500).json({
                success: false,
                error: e.message
            });
        });
    ;
}

exports.login = async (req, res, next) => {
    const {email, password} = req.body;
    console.log(req.body);
    if(!email || !password) {
        return res.status(400).json({
            success: false,
            error: "please provide an email and password"
        });
    }
    try {
        const user = await User.findOne({email}).select('+password');
        if(!user) {
            res.status(404).json({
                success: false,
                error: "cannot find user"
            });
        }
        else {
            const isMatch = await user.matchPasswords(password);
            if(!isMatch) {
                res.status(400).json({
                    success: false,
                    error: "incorrect password or email"
                });
            }
            else {
                sendToken(user, 200, res);
            }
        }
    } catch(e) {
        res.status(500).json({
            success: false,
            error: e.message
        });
    }
}

exports.update = async (req, res, next) => {
    const user = {
        username: req.body.username,
        email: req.body.email,
        name: req.body.name,
        permissions: req.body.permissions
    };
    if(req.body.password) {
        user.password = req.body.password;
    }
    const id = req.params.id;
    const found = await User.findOne({_id: id})
    if(!found) {
        return res.status(404).json({
            success: false,
            error: 'user not found!'
        });
    }
    User.findByIdAndUpdate(id, user, (err, data) => {
        if(err) {
            console.log(`error: ${err}`);
            return res.status(400).json({
                success: false,
                message: err.message
            });
        }
        else {
            User.findOne({_id: id}, format)
                .then((data) => {
                    res.status(201).json(data);
                })
            ;
        }
    });
}

exports.getUser = async (req, res) => {
    User.findOne({_id: req.params.id}, format)
        .then((user) => {
            res.status(201).json(user);
        })
        .catch((e) => {
            res.status(500).json({
                success: false,
                error: e.message
            });
        })
    ;     
}

exports.del = async (req, res, next) => {
    User.findByIdAndRemove({_id: req.params.id})
        .then(function(user) {
            res.status(201).json({
                success: true,
                data: user
            });
        })
        .catch((e) => {
            res.status(500).json({
                success: false,
                error: e.message
            })
        })
    ;
}

// exports.changePass = async (req, res, next) => {
//     if(!req.body.password) {
//         res.status(400).json({
//             success: false,
//             error: "new password is required",
//         });
//     }
//     const password = await hash(req.body.password);
//     User.updateOne({_id: req.params.id}, {
//         'password': password
//     })
//         .then(() => {
//             User.findById({_id: req.params.id})
//                 .then((user) => {
//                     if(!user) {
//                         res.status(404).json({
//                             success: false,
//                             error: 'user not found'
//                         });
//                     }
//                     else {
//                         sendToken(user, 201, res);
//                     }
//                 })
//                 .catch((e) => {
//                     res.status(500).json({
//                         success: false,
//                         error: e.message
//                     })
//                 })
//             ;
//         })
//         .catch((e) => {
//             res.status(500).json({
//                 success: false,
//                 error: e.message
//             })
//         })
//     ;
// }

// function recoveryMail(email, pass) {
//     return {
//         from: process.env.GMAIL_EMAIL,
//         to: email,
//         subject: 'Password recovery',
//         text: `New pass: ${pass}. Please change this as soon as possible`
//     };
// }

// exports.recover = async (req, res, next) => {
//     const email = req.body.email;
//     if(!email) {
//         res.status(400).json({
//             success: false,
//             error: "email must be given",
//         });
//     }
//     const pass = randomPassword();
//     console.log(pass);
//     User.findOneAndUpdate({email: email}, {
//         'password': await hash(pass)
//     })
//         .then((user) => {
//             if(!user) {
//                 res.status(404).json({
//                     success: false,
//                     error: 'user not found'
//                 })
//             }
//             else {
//                 transporter.sendMail(recoveryMail(email, pass), function(err, info) {
//                     if(err) {
//                         res.status(500).json({
//                             success: false,
//                             error: err
//                         });
//                     }
//                     else {
//                         console.log(`verification email sent!`);
//                         res.status(201).json({
//                             success: true,
//                             message: `check your email inbox for new password`
//                         });
//                     }
//                 });
//             }
//         })
//         .catch((e) => {
//             res.status(500).json({
//                 success: false,
//                 error: e.message
//             })
//         })
//     ;
// }