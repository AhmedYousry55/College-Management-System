const express = require('express');
const studentController = require('./../controllers/studentController');
const authController = require('../controllers/authController');
const router = express.Router();

// recentely added

// /api/v1/users/students/studnet/login
// /api/v1/users/students/studnet/signUp

router.route('/:entity/login').post(authController.login);
router.route('/:entity/signup').post(authController.signup);

router.route('/:entity/top10students').get( studentController.aliasTopStudents,studentController.getAllStudents);

router
  .route('/:entity')
  .get(
    authController.protect,
    authController.restrictTo('student', 'staff', 'admin'),
    studentController.getAllStudents

  )
  .post(
    authController.protect,
    authController.restrictTo('staff', 'admin'),
    studentController.createStudent
  );

router
  .route('/:entity/:id')
  .get(
    authController.protect,
    authController.restrictTo('staff', 'admin'),
    studentController.getOneStudent
  )
  .patch(
    authController.protect,
    authController.restrictTo('staff', 'admin'),
    studentController.updateStudent
  )
  .delete(
    authController.protect,
    authController.restrictTo('staff', 'admin'),
    studentController.deleteStudent
  );

module.exports = router;
