const express = require('express');
const router = express.Router();
const courseController = require('./../controllers/coursesController');
const authController = require('./../controllers/authController');


router
  .route('/')
  .get(authController.restrictTo('student','staff','admin'),courseController.getAllCourses)
  .post(authController.protect,authController.restrictTo('staff','admin'),courseController.createCourse);
router
  .route('/:id')
  .get(authController.restrictTo('student','staff','admin'),courseController.getOneCourse)
  .patch(authController.protect,authController.restrictTo('staff','admin'),courseController.updateCourse)
  .delete(authController.protect,authController.restrictTo('staff','admin'),courseController.deleteCourse);
  router
  .route('/:id/register')
  .post(authController.protect,authController.restrictTo('student','admin'),courseController.registerCourse);

  module.exports = router;