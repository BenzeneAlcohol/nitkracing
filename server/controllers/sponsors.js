const Sponsor = require('../models/Sponsor');

const format = {
    'id': '$_id',
    'name': 1,
    'picture': 1,
    'tier': 1,
    'description': 1,
    'website': 1
}

exports.del = async (req, res, next) => {
    Sponsor.findByIdAndRemove({_id: req.params.id})
        .then(function(sponsor) {
            res.status(201).json({
                success: true,
                data: sponsor
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

const extractSponsor = (req) => {
    const sponsor = {
        name: req.body.name,
        // picture: null,
        // cloudinary_id: null,
        website: req.body.website,
        tier: req.body.tier,
        description: req.body.description,
    };
    // console.log(req.file);
    if(req.file) {
        sponsor.picture = req.file.path;
        sponsor.cloudinary_id = req.file.filename;
    }
    return sponsor;
}

exports.create = async (req, res, next) => {
    try {
        const sponsor = extractSponsor(req);
        Sponsor.create(sponsor)
            .then((sponsor) => {
                Sponsor.findOne({_id: sponsor._id}, format)
                    .then((data) => {
                        res.status(200).json(data);
                    })
                ;
            })
            .catch((e) => {
                res.status(400).json({
                    success: false,
                    error: e.message
                });
            })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

exports.update = async (req, res, next) => {
    try {
        const sponsor = extractSponsor(req);
        // console.log(sponsor);
        const found = await Sponsor.findOne({_id: req.params.id});
        if(!found) {
            return res.status(404).json({
                success: false,
                message: "sponsor not found!"
            });
        }
        Sponsor.findByIdAndUpdate(req.params.id, sponsor, format, (err, data) => {
            if(err) {
                console.log(`error: ${err}`);
                return res.status(400).json({
                    success: false,
                    message: err.message
                });
            }
            else {
                Sponsor.findOne({_id: req.params.id}, format)
                    .then((data) => {
                        // console.log(data);
                        res.status(201).json(data);
                    })
                ;
            }
        });
    } catch(e) {
        res.status(500).json({
            success: false,
            error: e.message
        });
    }
}

exports.readOne = async (req, res, next) => {
    Sponsor.findOne({_id: req.params.id}, format)
        .then((sponsor) => {
            res.status(201).json(sponsor);
        })
        .catch((e) => {
            res.status(500).json({
                success: false,
                error: e.message
            });
        })
    ;        
}

exports.read = async (req, res, next) => {
    const {name} = req.query;
    try {
        if(!name) {
            data = await Sponsor.find({}, format);
        }
        else {
            data = await Sponsor.findOne({name}, format);
            data = [data];
        }
        res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
        res.setHeader('Content-Range', data.length); 
        res.status(200).json(data);
    } catch(e) {
        res.status(500).json({
            success: false,
            error: e.message
        });
    }
}

exports.getSponserByTier = async (req,res) =>{
    try {
        const tier = req.query.tier;
        const sponsors = await Sponsor.find({tier: tier});
        if(sponsors)
        {
            res.status(200).json({
                success: true,
                sponsors
            });
        }
        else
        {
            res.status(206).json({
                success: false
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}