const express = require('express');
const Assignment = require('../models/assignments');
const assignmentController = require('./../controllers/assignmentController');
const router = express.Router();

router.route('/').get(assignmentController.getAllAssignments).post(assignmentController.createAssignments);


router.route('/:id').get(assignmentController.getOneAssignment).patch(assignmentController.updateAssignment).delete(assignmentController.deleteAssignment);


module.exports = router;


