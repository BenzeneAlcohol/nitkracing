const express = require('express');
const {auth} = require('../middleware/auth');

const {register, login, update, del, getUsers, getUser} = require('../controllers/auth');
const {isAdmin} = require('../middleware/admin');

const router = express.Router();

router.post('/', isAdmin, register);
router.get('/', auth, getUsers);
router.get('/:id', auth, getUser);
router.post('/login', login);
router.put('/:id', isAdmin, update);
router.delete('/:id', auth, del);
// router.patch('/:id/change-pass', auth, changePass);
// router.patch('/recover', recover);

module.exports = router;