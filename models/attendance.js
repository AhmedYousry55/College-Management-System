const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    attendance_id:{
        type: Number,
        unique:true,

    },
    student_id:{
        type:Number,
        required:[true, 'attendance must have  astudent id'],
        unique:true,
    },
    course_id:{
        type:Number,
        unique:true,
        required:[true, 'attendance must have a course id'],
    },

    section_id:{
        type:Number,
        requird:[true, 'section must have an id'],
        unique:true,
    },
    date:{  
        type:Date,
        default:Date.now(),
    },
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;