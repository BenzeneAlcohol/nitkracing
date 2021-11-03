const express = require('express');
const {storage} = require('../utils/cloudinary');
const multer = require('multer');

const {auth} = require('../middleware/auth');
const {create, get, getOne, del, update} = require('../controllers/achievement')

const upload = multer({storage});

const router = express.Router();

router.post('/', auth, upload.single("image"), create);
router.get('/', get);
router.get('/:id', getOne);
router.delete('/:id', auth, del);
router.put('/:id', update);

module.exports = router;