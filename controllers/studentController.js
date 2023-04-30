const Student = require('../models/student');
const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');




//6) Students handler factory

exports.getAllStudents = factory.getAll(Student);
exports.createStudent = factory.createOne(Student);
exports.getOneStudent = factory.getOne(Student);
exports.updateStudent = factory.updateOne(Student);
exports.deleteStudent = factory.deleteOne(Student);