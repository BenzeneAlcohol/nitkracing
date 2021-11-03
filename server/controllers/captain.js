const Captain = require('../models/Captain');

exports.addCaptain = async (req,res)=>{
    try{
        const captain = new Captain({
            name: req.body.name,
            picture: req.file.path,
            cloudinary_id: req.file.filename,
            subsystem: req.body.subsystem,
            linkedin: req.body.linkedin,
            instagram: req.body.instagram,
            bio: req.body.bio,
            branch: req.body.branch,
            email: req.body.email,
            gradyear: req.body.gradyear
        })
        await captain.save();
        res.status(200).json(captain);
    }catch(err)
    {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

exports.getCaptain = async(req,res)=>{
    try {
        const captain = await Captain.find({});
        res.status(200).json({
            captain
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

exports.deleteCaptain = async(req, res)=>{
    try {
        const {id} = req.params;
        const captain = await Captain.findOneAndDelete({_id: id});
        res.status(200).json({
            success: true
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}