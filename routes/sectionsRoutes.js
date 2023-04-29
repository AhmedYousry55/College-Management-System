const express = require('express');
const sectionController = require('../controllers/sectionController');
const authController = require('../controllers/authController');
const router = express.Router();


router
  .route('/sections')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),sectionController.getAllSections)
  .post(authController.protect,authController.restrictTo('staff','admin'),sectionController.CreateSection);
router
  .route('/sections/:id')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),sectionController.getOneSection)
  .patch(authController.protect,authController.restrictTo('staff','admin'),sectionController.updateSection)
  .delete(authController.protect,authController.restrictTo('staff','admin'),sectionController.deleteSection);


  module.exports = router;
