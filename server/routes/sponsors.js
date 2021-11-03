const express = require('express');

const {create, read, update, del, getSponserByTier, readOne} = require('../controllers/sponsors');

const {auth} = require('../middleware/auth');

const router = express.Router();

const {storage} = require('../utils/cloudinary');
const multer = require('multer');
const upload = multer({storage});

router.post('/', auth, upload.single("image"), create);
router.get('/', read);
router.get('/tier', getSponserByTier);
router.put('/:id', auth, upload.single("image"), update);
router.delete('/:id', auth, del);
router.get('/:id', readOne);

module.exports = router;