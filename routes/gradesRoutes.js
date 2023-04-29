const express = require('express');
const gradesController = require('../controllers/gradesController');
const authController = require('../controllers/authController');
const router = express.Router();


router
  .route('/Grades')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),gradesController.getAllGrades)
  .post(authController.protect,authController.restrictTo('staff','admin'),gradesController.createGrades);
router
  .route('/Grades/:id')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),gradesController.getOneGrade)
  .patch(authController.protect,authController.restrictTo('staff','admin'),gradesController.updateGrades)
  .delete(authController.protect,authController.restrictTo('staff','admin'),gradesController.deleteGrades);


  module.exports = router;