const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
  
  // lecture_id: {
  //   type: Number,
  //   unique: true,
  //   required: [true, 'section must have an id'],
  // },

  name: {
    type: String,
    required: [true, 'lab must have a name'],
  },
  maxGroupSize :{
    type:Number,
    required:[true ,  ' A lecture must have a limit'],
    select:false,
    min:30,
    max:60,
  },
  professor:{
    type:String,
    require:[true,'lecture must include a professor name'],
  },
  hall: {
    type: String,
    required: [true, 'lecture must include the hall'],
  },
  
 time: String,
 
});

const Lecture = mongoose.model('Lecture',lectureSchema);

module.exports = Lecture;