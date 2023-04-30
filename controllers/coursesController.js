const Course = require('./../models/courses');
const factory = require('./handlerFactory');
const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const catchAsync = require('./../utils/catchAsync');


//1)Course handler factory
exports.getAllCourses = factory.getAll(Course);
exports.createCourse = factory.createOne(Course);
exports.getOneCourse = factory.getOne(Course);
exports.updateCourse = factory.updateOne(Course);
exports.deleteCourse = factory.deleteOne(Course);
