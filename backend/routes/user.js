const express = require('express');
const { userDetail,register, login, logout, forgetPassword, resetPassword } = require('../controllers/user');
const { authenticationMid } = require('../middleware/auth');

const router= express.Router();

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)
router.post('/forgetPassword', forgetPassword)
router.post('/reset/:token', resetPassword)
router.get('/me',authenticationMid, userDetail)



module.exports =router