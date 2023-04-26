const mongoose = require('mongoose');

const coursesSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "course must have an id"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Course must have a name"],
    unique: true,
  },

  description: {
    type: String,
    maxlength: 80,
  },

  prerequisites: String,

  hall: {
    type: Number,
    required: true,
  },

  credits: {
    type: Number,
    required: true,
  },

  time :{
    type:Date,
  },
  content :{
    type:String,
  },
  // maxEnrollments:{
  //   type:Number,
  //   required:[true,'missing field'],
  // },
});

const Course = new mongoose.model('Course', coursesSchema);


module.exports = Course;
