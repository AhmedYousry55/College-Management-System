const express = require('express');
const router = express.Router();
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');


router.route('/login').post(authController.login);

router.route('/signup').post(authController.signup);

// router.route('/logout').get(authController.logout);

// router.put('/forgot-password', authController.forgotPassword);
// router.put('/resetpassword' , authController.resetPassword);


router.route('/').get(userController.getAllUsers).post(userController.createUser)

router.route('/:id').get(userController.getOneUser).patch(userController.updateUser).delete(userController.deleteUser);


module.exports = router;