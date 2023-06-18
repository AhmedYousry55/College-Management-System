const express = require('express');
const lectureController = require('../controllers/lectureController');
const authController = require('../controllers/authController');
const router = express.Router();

router
  .route('/')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),lectureController.getAllLectures)
  .post(authController.protect,authController.restrictTo('staff','admin'),lectureController.createLecture);
router
  .route('/:id')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),lectureController.getOneLecture)
  .patch(authController.protect,authController.restrictTo('staff','admin'),lectureController.updateLecture)
  .delete(authController.protect,authController.restrictTo('staff','admin'),lectureController.deleteLecture);

  router.route('/:id/Enroll/').post(authController.protect,authController.restrictTo('student','staff','admin'),lectureController.registerLecture);
  router.route('/:id/qrcode').get(lectureController.generateQRCode);

  router.route('/:id/verifyattendance').get(lectureController.verifyAttendance);

  module.exports = router;