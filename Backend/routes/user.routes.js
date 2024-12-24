const express = require('express')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const usercontroller = require('../controllers/user.controllers')


router.post('/register',[
    body('email').isEmail().withMessage('invalide Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be at least 3 charaters long'),
    body('password').isLength({min:6}).withMessage('pass name must be at least 6 charaters long'),
],
usercontroller.registerUser)



module.exports = router;