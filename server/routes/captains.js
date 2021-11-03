const express = require('express');
const {addCaptain, getCaptain, deleteCaptain} = require('../controllers/captain')
const {storage} = require('../utils/cloudinary');
const multer = require('multer');
const upload = multer({storage});

const router = express.Router();

router.post('/', upload.single("image"), addCaptain);
router.get('/', getCaptain);
router.delete('/del/:id', deleteCaptain);

module.exports = router;