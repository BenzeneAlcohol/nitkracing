const Subscription = require('../models/Subscription');

const {transporter} = require('../utils/mailer');
const dotenv = require('dotenv');
dotenv.config();

const format = {
    'id': '$_id',
    'email': 1,
    'verified': 1,
}


exports.subscribe = async (req, res, next) => {
    Subscription.create({
        'email': req.body.email
    })
        .then((subscription) => {
            transporter.sendMail(verificationMail(subscription.id, subscription.email), function(err, info) {
                if(err) {
                    res.status(500).json({
                        success: false,
                        error: err
                    });
                }
                else {
                    console.log(`verification email sent!`);
                }
            });
            res.status(201).json({
                success: true,
                message: `verification email sent to ${subscription.email}`
            });
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
    Subscription.findByIdAndRemove({_id: req.params.id})
        .then((subscription) => {
            res.status(201).json({
                success: true,
                data: subscription
            })
        })
        .catch((e) => {
            res.status(500).json({
                success: false,
                error: e.message
            })
        })
    ;
}

exports.activate = async (req, res, next) => {
    const id = req.params.id;
    Subscription.findByIdAndUpdate({_id: id}, {
        'verified': true
    })
        .then(() => {
            Subscription.findOne({_id: id})
                .then((subscription) => {
                    res.status(201).json({
                        success: true,
                        message: `${subscription.email} verified successfully`
                    });
                })
        })
        .catch((e) => {
            res.status(500).json({
                success: false,
                error: e.message
            });
        })
    ;
}

exports.get = async(req, res) => {
    Subscription.find({}, format)
        .then((data) => {
            res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
            res.setHeader('Content-Range', data.length); 
            res.status(200).json(data);
        })
        .catch((e) => {
            res.status(500).json({
                success: false,
                error: e.message
            });
        })
    ;
}


function verificationMail(id, email) {
    return {
        from: process.env.GMAIL_EMAIL,
        to: email,
        subject: 'Email verification',
        text: `http://localhost:5000/api/subscriptions/${id}/activate`
    };
}