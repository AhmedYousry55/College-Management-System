const mongoose = require('mongoose');

const gradesSchema = mongoose.Schema({
  student_id: {
    type: Number,
    required: [true, 'id is missing!'],
    unique: true,
  },
  student_name: {
    type: String,
    required: [true, 'grades must include the studet name'],
  },

  course_id: {
    type: String,
    required: [true, 'course_id is missing'],
  },

  course_name: String,

  final: {
    type: Number,
    required: [true, 'final grade is missed'],
  },
  midterm: {
    type: Number,
    required: [true, 'midterm grade is missed'],
  },
  lab: {
    type: Number,
    required: [true, 'lab grade is missed'],
  },

  gpa: {
    type: Number,
    required: [true, 'gpa is missed !'],
  },

  cgpa: {
    type: Number,
    required: [true, 'cgpa is missed'],
  },
});

const Grade = mongoose.model('Grade', gradesSchema);

module.exports = Grade;
