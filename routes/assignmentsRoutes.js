const express = require('express');
const Assignment = require('../models/assignments');
const router = express.Router();
const assignmentController = require('./../controllers/assignmentController');

router.route('/Assignments').get(assignmentController.getAllAssignments).post(assignmentController.createAssignments);


router.route('/Assignments/:id').get(assignmentController.getOneAssignment).patch(assignmentController.updateAssignment).delete(assignmentController.deleteAssignment);


module.exports = router;


