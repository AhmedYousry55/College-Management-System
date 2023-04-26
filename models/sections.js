const mongoose = require('mongoose');
const sectionsSchema = new mongoose.Schema({
  
  section_id: {
    type: Number,
    unique: true,
    required: [true, 'section must have an id'],
  },

  name: {
    type: String,
    required: [true, 'lab must have a name'],
  },
  maxGroupSize :{
    type:Number,
    required:[true ,  ' A section must have a limit'],
  },

  lab: {
    type: String,
    required: [true, 'lab musyt have a name'],
  },

  time: String,
});

const Section = new mongoose.model('Section', sectionsSchema);

module.exports = Section;
