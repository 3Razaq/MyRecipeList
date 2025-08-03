const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller');

router.get('/sign-in', auth.renderSignIn);
router.post('/sign-in', auth.signIn);
router.get('/sign-up', auth.renderSignUp);
router.post('/sign-up', auth.signUp);
router.get('/sign-out', auth.signOut);

module.exports = router;