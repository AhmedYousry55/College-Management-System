const express = require('express');
const lectureController = require('../controllers/lectureController');
const authController = require('../controllers/authController');
const router = express.Router();

router
  .route('/lectures')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),lectureController.getAllLectures)
  .post(authController.protect,authController.restrictTo('staff','admin'),lectureController.createLecture);
router
  .route('/lectures/:id')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),lectureController.getOneLecture)
  .patch(authController.protect,authController.restrictTo('staff','admin'),lectureController.updateLecture)
  .delete(authController.protect,authController.restrictTo('staff','admin'),lectureController.deleteLecture);


  module.exports = router;