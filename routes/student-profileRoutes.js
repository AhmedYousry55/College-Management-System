const express = require('express');
const studentProfileController = require('../controllers/student-profileController');
const authController = require('../controllers/authController');
const router = express.Router();

router
  .route('/students')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),studentProfileController.getAllStudents)
  .post(authController.protect,authController.restrictTo('staff', 'admin'),studentProfileController.createStudent);
router
  .route('/students/:id')
  .get(authController.protect,authController.restrictTo('staff','admin'),studentProfileController.getOneStudent)
  .patch(authController.protect,authController.restrictTo('staff','admin'),studentProfileController.updateStudent)
  .delete(authController.protect,authController.restrictTo('staff','admin'),studentProfileController.deleteStudent);

  module.exports = router;