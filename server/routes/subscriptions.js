const express = require('express');

const {subscribe, del, activate, get} = require('../controllers/subscriptions');
const {auth} = require('../middleware/auth');

const router = express.Router();

router.post('/', subscribe);
router.get('/:id/activate', activate);
router.delete('/:id', del);
router.get('/', auth, get);

module.exports = router;