const mongoose  = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      course: {
        type: mongoose.Schema.ObjectId,
        ref: 'Course',
        required: true
      },
      description: {
        type: String,
        required: true
      },
      completed:{
        type:Boolean,
        default:false,
      },
      assigned:{
        type:Boolean,
        default:false,
      },

      deadline: {
        type: Date,
        required: true
      },
    },
    {timestamps: true },
    
    );


const Assignment = new mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;