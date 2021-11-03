const express = require('express');
const multer = require('multer');

const {addMember, getMember, findMemberBySubsystem, findSystemHeads, deleteMember, getMemberById, update} = require('../controllers/member')
const {storage} = require('../utils/cloudinary');
const upload = multer({storage});
const {auth} = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, upload.single("image"), addMember)
router.get('/', getMember);
router.put('/:id', auth, upload.single("image"), update)
router.get('/subsystem', findMemberBySubsystem);
router.get('/heads', findSystemHeads);
router.delete('/:id', auth, deleteMember);
router.get('/:id', getMemberById);

module.exports = router;