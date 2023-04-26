const mongoose = require('mongoose');

const coursesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!'],
  },
  
  code:{
    type:String,
    required:[true,'Please provie the course id'],
  },

  prerequisites:[String],
});

const Coursepreqs = new mongoose.model('Coursepreqs', coursesSchema);

module.exports = Coursepreqs;
