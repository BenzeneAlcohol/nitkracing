const Member = require('../models/Member');

const format = {
    'id': '$_id',
    'name': 1,
    'picture': 1,
    'subsystem': 1,
    'branch': 1,
    'head': 1,
    'linkedin': 1,
    'instagram': 1,
    'email': 1,
    'bio': 1,
    'gradyear': 1,
}

const extractMember = (req) => {
    const member = {
        name: req.body.name,
        subsystem: req.body.subsystem,
        branch: req.body.branch,
        head: req.body.head,
        linkedin: req.body.linkedin,
        instagram: req.body.instagram,
        email: req.body.email,
        bio: req.body.email,
        gradyear: req.body.gradyear
    };
    // console.log(req.file);
    if(req.file) {
        member.picture = req.file.path;
        member.cloudinary_id = req.file.filename;
    }
    return member;
}

exports.addMember = async (req,res)=>{
    Member.create(extractMember(req))
        .then((member) => {
            Member.findOne({_id: member._id}, format)
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

exports.findMemberBySubsystem = async (req,res) =>{
    try {
        const sub = req.query.subsystem;
        console.log(sub);
        const members = await Member.find({subsystem: sub});
        console.log(members);
        res.status(200).json({
            members
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

exports.findSystemHeads = async (req,res) =>{
    try {
        const members = await Member.find({head: true});
        console.log(members);
        res.status(200).json({
            members
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

exports.getMember = async(req, res) =>{
    Member.find({}, format)
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

exports.deleteMember = async(req,res)=>{
    try {
        const {id} = req.params;
        const member = await Member.findOneAndDelete({_id:id});
        res.status(200).json({
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getMemberById = async(req,res)=>{
    Member.findOne({_id: req.params.id}, format)
        .then((member) => {
            res.status(201).json(member);
        })
        .catch((e) => {
            res.status(500).json({
                success: false,
                error: e.message
            });
        })
    ;     
}

exports.update = async (req, res, next) => {
    try {
        const member = extractMember(req);
        const found = await Member.findOne({_id: req.params.id});
        if(!found) {
            return res.status(404).json({
                success: false,
                message: "member not found!"
            });
        }
        Member.findByIdAndUpdate(req.params.id, member, (err, data) => {
            if(err) {
                console.log(`error: ${err}`);
                return res.status(400).json({
                    success: false,
                    message: err.message
                });
            }
            else {
                Member.findOne({_id: req.params.id}, format)
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