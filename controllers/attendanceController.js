const QRCode = require('qrcode');
const Student = require('./../models/student');
const Attendance = require('../models/attendance');
const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');


//5) Attendance handler factory

exports.getAttendance = factory.getAll(Attendance);
exports.createAttendance = factory.createOne(Attendance);
exports.getAttendee = factory.getOne(Attendance);
exports.updateAttendance = factory.updateOne(Attendance);
exports.deleteAttendance = factory.deleteOne(Attendance);



exports.generateQRCode = catchAsync(async (req, res, next) => {
    const studentId  = req.params.id;
  
    // Find the student by their ID
    const student = await Student.findById(studentId);
    if (!student) {
      return next(new AppError('Student not found', 404));
    }
  
    // Generate the text that will be encoded in the QR code
    const text = `Student ID: ${student.id}\nName: ${student.name}`;
  
    // Generate the QR code as a base64-encoded image
    const qrCodeImage = await QRCode.toDataURL(text);
  
    // Update the attendance record for the student
    const attendance = await Attendance.create({
      students: [student],
      course: req.body.courseId,
      section: req.body.sectionId,
      lecture: req.body.lectureId,
      isPresent: true,
    });
  
    res.status(200).json({
      status: 'success',
      data: {
        student,
        qrCodeImage,
        attendance,
      },
    });
  });

