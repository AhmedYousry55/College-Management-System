const express = require('express');
const AdviserController = require('../controllers/AdviserController');
const authController = require('../controllers/authController');
const router = express.Router();


router
  .route('/Adviser')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),AdviserController.getAllAdvisers)
  .post(authController.protect,authController.restrictTo('staff','admin'),AdviserController.createAdviser);
router
  .route('/Adviser/:id')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),AdviserController.getOneAdviser)
  .patch(authController.protect,authController.restrictTo('staff','admin'),AdviserController.updateAdviser)
  .delete(authController.protect,authController.restrictTo('staff','admin'),AdviserController.deleteAdviser);

  module.exports = router;