const Achievement = require('../models/Achievement');

const format = {
    'id': '$_id',
    'name': 1,
    'picture': 1,
    'description': 1,
}

const extractAchievement = (req) => {
    const achievement = {
        name: req.body.name,
        description: req.body.description,
    };
    if(req.file) {
        achievement.picture = req.file.path;
        achievement.cloudinary_id = req.file.filename;
    }
    return achievement;
}

exports.create = async (req, res) => {
    Achievement.create(extractAchievement(req))
        .then((achievement) => {
            Achievement.findOne({_id: achievement._id}, format)
                .then((data) => {
                    res.status(201).json(data);
                })
            ;
        })
        .catch((e) => {
            res.status(400).json({
                success: false,
                error: e.message
            });
        })
    ;
}

exports.get = async(req, res) => {
    Achievement.find({}, format)
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

exports.getOne = async(req,res)=>{
    Achievement.findOne({_id: req.params.id}, format)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((e) => {
            res.status(500).json({
                success: false,
                error: e.message
            });
        })
    ;     
}

exports.del = async(req, res) => {
    Achievement.findByIdAndRemove({_id: req.params.id})
        .then(function(data) {
            res.status(201).json({
                success: true,
                data: data
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

exports.update = async (req, res, next) => {
    const achievement = extractAchievement(req);
    const id = req.params.id;
    const found = await Achievement.findOne({_id: id})
    if(!found) {
        return res.status(404).json({
            success: false,
            error: 'achievement not found!'
        });
    }
    Achievement.findByIdAndUpdate(id, achievement, (err, data) => {
        if(err) {
            console.log(`error: ${err}`);
            return res.status(400).json({
                success: false,
                message: err.message
            });
        }
        else {
            Achievement.findOne({_id: id}, format)
                .then((data) => {
                    res.status(201).json(data);
                })
            ;
        }
    });
}

