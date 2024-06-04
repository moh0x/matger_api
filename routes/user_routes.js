const express = require('express');
const router = express.Router();
const userControoler = require('../controllers/user_controllers');
const { verifyToken } = require("../utility/verify_token");
const {body,validationResult } = require("express-validator");
router.post('/register',body("email").isEmail().isLength({min:6,max:50}).withMessage("type valid email"),body("password").isLength({min:8,max:30}).withMessage("type valid password"),body("phone").isMobilePhone().isLength({min:10,max:15}).withMessage("type valid phone number"),body("userName").isLength({min:6,max:30}).withMessage("type valid user name"),userControoler.registerFunc);

router.patch('/verifyAccount',verifyToken,userControoler.confirmAccountFunc);

router.patch('/resetPassword',verifyToken,userControoler.resetPasswordFunc);

router.post('/login',body("email").isEmail().isLength({min:6,max:50}).withMessage("type valid email"),body("password").isLength({min:8,max:30}).withMessage("type valid password"),userControoler.loginFunc);
  
router.post('/sendResetCode',userControoler.sendResetCodeFunc)
  module.exports = 
    router
  