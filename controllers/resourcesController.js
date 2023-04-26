const Attendance = require('../models/attendance');
const Section = require('../models/sections');
const Staff = require('../models/staff');
const Lecture = require('../models/lectures');
const Course = require('../models/courses');
const Student = require('../models/student-profile');
const Adviser = require('../models/Adviser');
const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');
const Grade = require('../models/grades');

//1)Course handler factory
exports.getAllCourses = factory.getAll(Course);
exports.createCourse = factory.createOne(Course);
exports.getOneCourse = factory.getOne(Course);
exports.updateCourse = factory.updateOne(Course);
exports.deleteCourse = factory.deleteOne(Course);

//2)Staff handler factory

exports.getAllStaffs = factory.getAll(Staff);
exports.createStaff = factory.createOne(Staff);
exports.getOneStaff = factory.getOne(Staff);
exports.updateStaff = factory.updateOne(Staff);
exports.deleteStaff = factory.deleteOne(Staff);

//3) Lectures handler factory

exports.getAllLectures = factory.getAll(Lecture);
exports.createLecture = factory.createOne(Lecture);
exports.getOneLecture = factory.getOne(Lecture);
exports.updateLecture = factory.updateOne(Lecture);
exports.deleteLecture = factory.deleteOne(Lecture);

//4) Sections Handler factory

exports.getAllSections = factory.getAll(Section);
exports.CreateSection = factory.createOne(Section);
exports.getOneSection = factory.getOne(Section);
exports.updateSection = factory.updateOne(Section);
exports.deleteSection = factory.deleteOne(Section);

//5) Attendance handler factory

exports.getAttendance = factory.getAll(Attendance);
exports.createAttendance = factory.createOne(Attendance);
exports.getAttendee = factory.getOne(Attendance);
exports.updateAttendance = factory.updateOne(Attendance);
exports.deleteAttendance = factory.deleteOne(Attendance);

//6) Students handler factory

exports.getAllStudents = factory.getAll(Student);
exports.createStudent = factory.createOne(Student);
exports.getOneStudent = factory.getOne(Student);
exports.updateStudent = factory.updateOne(Student);
exports.deleteStudent = factory.deleteOne(Student);

// 7) Adviser handler factory

exports.getAllAdvisers = factory.getAll(Adviser);
exports.createAdviser = factory.createOne(Adviser);
exports.getOneAdviser = factory.getOne(Adviser);
exports.updateAdviser = factory.updateOne(Adviser);
exports.deleteAdviser = factory.deleteOne(Adviser);

// 8) Grades 

exports.getAllGrades = factory.getAll(Grade);
exports.createGrades = factory.createOne(Grade);
exports.getOneGrade = factory.getOne(Grade);
exports.updateGrades = factory.updateOne(Grade);
exports.deleteGrades = factory.deleteOne(Grade);

