const express = require('express');
const attendanceController = require('../controllers/attendanceController');
const authController = require('../controllers/authController');
const router = express.Router();

router
  .route('/')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),attendanceController.getAttendance)
  .post(authController.protect,authController.restrictTo('staff','admin'),attendanceController.createAttendance);
router
  .route('/:id')
  .get(authController.protect,authController.restrictTo('staff','admin'),attendanceController.getAttendee)
  .patch(authController.protect,authController.restrictTo('staff','admin'),attendanceController.updateAttendance)
  .delete(authController.protect,authController.restrictTo('staff','admin'),attendanceController.deleteAttendance);
  
  router.route('/qrcode/:id').get(authController.protect,authController.restrictTo('student','staff','admin'),attendanceController.generateQRCode)

  module.exports = router;