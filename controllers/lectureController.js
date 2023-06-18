const QRCode = require('qrcode');
const Lecture = require('../models/lectures');
const Attendance = require('./../models/attendance');
const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');


//3) Lectures handler factory

exports.getAllLectures = factory.getAll(Lecture);
exports.createLecture = factory.createOne(Lecture);
exports.getOneLecture = factory.getOne(Lecture);
exports.updateLecture = factory.updateOne(Lecture);
exports.deleteLecture = factory.deleteOne(Lecture);


exports.registerLecture = async (req, res) => {
    try {
      // Get the lecture by ID
      const lecture = await Lecture.findById(req.params.lectureId);
  
      // Get the currently logged in student
      const student = await Student.findById(req.user._id);
  
      // Check if the lecture exists
      if (!lecture) {
        return res.status(404).json({
          status: 'fail',
          message: 'Lecture not found',
        });
      }
  
      // Check if the student is already enrolled in the lecture
      if (lecture.students.includes(req.user._id)) {
        return res.status(400).json({
          status: 'fail',
          message: 'Student is already enrolled in this lecture',
        });
      }
  
      // Check if the lecture is full
      if (lecture.students.length >= lecture.maxGroupSize) {
        return res.status(400).json({
          status: 'fail',
          message: 'Lecture is full',
        });
      }
  
      // Enroll the student in the lecture
      lecture.students.push(req.user._id);
      await lecture.save();
  
      // Add the lecture to the student's list of lectures
      student.lectures.push(lecture._id);
      await student.save({ validateBeforeSave: false });
  
      res.status(200).json({
        status: 'success',
        message: 'Enrolled in lecture successfully',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 'error',
        message: 'An error occurred while enrolling in lecture',
      });
      
    }
  };


  exports.generateQRCode = catchAsync(async (req, res, next) => {
    // Get the lecture by ID
    const lecture = await Lecture.findById(req.params.id);
  
    // Check if the lecture exists
    if (!lecture) {
      return next(new AppError('Lecture not found', 404));
    }
  
    // Check if the user is within the specified location

    // const { latitude, longitude } = req.query;
    // if (!isWithinLocation(latitude, longitude, lecture.location)) {
    //   return next(new AppError('You are not within the specified location', 400));
    // }
  
    // Check if the lecture is currently ongoing

    const lectureStartTime = new Date(lecture.time.startTime);
    const lectureEndTime = new Date(lecture.time.endTime);
    if (lectureStartTime > Date.now() || lectureEndTime < Date.now()) {
      return next(new AppError('Lecture is not currently ongoing', 400));
    }
  
    // Generate a unique QR code for the lecture
    const expirationTime = new Date(Date.now() + 15 * 60 * 1000);

    const qrCodeData = {
      lectureId: lecture._id,
      timestamp: Date.now(),
      expirationTime
    };

    const qrCodeText = JSON.stringify(qrCodeData);
    console.log(qrCodeText);
    const qrCode = await QRCode.toDataURL(qrCodeText);

    // Return the QR code image and expiration time as a response
    res.status(200).json({
      status: 'success',
      qrCode,
      expirationTime,
    });
  });
  
  function isWithinLocation(latitude, longitude, location) {
    // Check if the user is within 100 meters of the specified location
    const distance = getDistanceFromLatLonInMeters(latitude, longitude, location.latitude, location.longitude);
    return distance <= 100;
  }
  
  function getDistanceFromLatLonInMeters(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Earth's radius in meters
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in meters
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180);
  }
  
  exports.verifyAttendance = catchAsync(async (req, res, next) => {
    // Get the QR code data from the request body
    const qrCodeData = req.body;
  
    // Parse the QR code data
    let parsedData;
    try {
      parsedData = JSON.parse(qrCodeData);
    } catch (error) {
      return next(new AppError('Invalid QR code data', 400));
    }
  
    // Get the lecture by ID
    const lecture = await Lecture.findById(parsedData.lectureId);
  
    // Check if the lecture exists
    if (!lecture) {
      return next(new AppError('Lecture not found', 404));
    }
  
    // Check if the lecture has already ended
    const lectureEndTime = new Date(lecture.time.endTime);
    if (lectureEndTime < Date.now()) {
      return next(new AppError('Lecture has ended', 400));
    }
  
    // Check if the student is enrolled in the lecture
    const studentId = req.user._id;
    if (!lecture.students.includes(studentId)) {
      return next(new AppError('Student is not enrolled in this lecture', 400));
    }
  
    // Check if the student has already been marked as present
    const attendance = await Attendance.findOne({
      students: studentId,
      lecture: parsedData.lectureId,
      date: {
        $gte: new Date(lecture.time.startTime),
        $lte: new Date(lecture.time.endTime),
      },
    });
    if (attendance) {
      return next(new AppError('Student has already been marked as present', 400));
    }
  
    // Mark the student as present
    const newAttendance = new Attendance({
      students: [studentId],
      course: lecture.course,
      section: lecture.section,
      lecture: parsedData.lectureId,
      isPresent: true,
      date: Date.now(),
    });
    await newAttendance.save();
  
    res.status(200).json({
      status: 'success',
      message: 'Attendance marked successfully',
    });
  });
