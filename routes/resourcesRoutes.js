const express = require('express');
const resourcesController = require('../controllers/resourcesController');
const authController = require('../controllers/authController');
const router = express.Router();



router
  .route('/staff')
  .get(authController.protect,authController.restrictTo('student','staff','admin') , resourcesController.getAllStaffs)
  .post(authController.protect,authController.restrictTo('staff','admin') , resourcesController.createStaff);
router
  .route('/staff/:id')
  .get(authController.protect,authController.restrictTo('staff','admin'),resourcesController.getOneStaff)
  .patch(authController.protect,authController.restrictTo('staff','admin'),resourcesController.updateStaff)
  .delete(authController.protect,authController.restrictTo('staff','admin'),resourcesController.deleteStaff);

router
  .route('/students')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),resourcesController.getAllStudents)
  .post(authController.protect,authController.restrictTo('staff', 'admin'),resourcesController.createStudent);
router
  .route('/students/:id')
  .get(authController.protect,authController.restrictTo('staff','admin'),resourcesController.getOneStudent)
  .patch(authController.protect,authController.restrictTo('staff','admin'),resourcesController.updateStudent)
  .delete(authController.protect,authController.restrictTo('staff','admin'),resourcesController.deleteStudent);

router
  .route('/lectures')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),resourcesController.getAllLectures)
  .post(authController.protect,authController.restrictTo('staff','admin'),resourcesController.createLecture);
router
  .route('/lectures/:id')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),resourcesController.getOneLecture)
  .patch(authController.protect,authController.restrictTo('staff','admin'),resourcesController.updateLecture)
  .delete(authController.protect,authController.restrictTo('staff','admin'),resourcesController.deleteLecture);

router
  .route('/sections')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),resourcesController.getAllSections)
  .post(authController.protect,authController.restrictTo('staff','admin'),resourcesController.CreateSection);
router
  .route('/sections/:id')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),resourcesController.getOneSection)
  .patch(authController.protect,authController.restrictTo('staff','admin'),resourcesController.updateSection)
  .delete(authController.protect,authController.restrictTo('staff','admin'),resourcesController.deleteSection);

router
  .route('/Attendance')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),resourcesController.getAttendance)
  .post(authController.protect,authController.restrictTo('staff','admin'),resourcesController.createAttendance);
router
  .route('/Attendance/:id')
  .get(authController.protect,authController.restrictTo('staff','admin'),resourcesController.getAttendee)
  .patch(authController.protect,authController.restrictTo('staff','admin'),resourcesController.updateAttendance)
  .delete(authController.protect,authController.restrictTo('staff','admin'),resourcesController.deleteAttendance);

router
  .route('/courses')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),resourcesController.getAllCourses)
  .post(authController.protect,authController.restrictTo('staff','admin'),resourcesController.createCourse);
router
  .route('/courses/:id')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),resourcesController.getOneCourse)
  .patch(authController.protect,authController.restrictTo('staff','admin'),resourcesController.updateCourse)
  .delete(authController.protect,authController.restrictTo('staff','admin'),resourcesController.deleteCourse);

router
  .route('/Adviser')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),resourcesController.getAllAdvisers)
  .post(authController.protect,authController.restrictTo('staff','admin'),resourcesController.createAdviser);
router
  .route('/Adviser/:id')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),resourcesController.getOneAdviser)
  .patch(authController.protect,authController.restrictTo('staff','admin'),resourcesController.updateAdviser)
  .delete(authController.protect,authController.restrictTo('staff','admin'),resourcesController.deleteAdviser);

router
  .route('/Grades')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),resourcesController.getAllGrades)
  .post(authController.protect,authController.restrictTo('staff','admin'),resourcesController.createGrades);
router
  .route('/Grades/:id')
  .get(authController.protect,authController.restrictTo('student','staff','admin'),resourcesController.getOneGrade)
  .patch(authController.protect,authController.restrictTo('staff','admin'),resourcesController.updateGrades)
  .delete(authController.protect,authController.restrictTo('staff','admin'),resourcesController.deleteGrades);

// router.route('/dashboard').get(resourcesController.getDashboard).post(resourcesController.writeinDashboard);

module.exports = router;
