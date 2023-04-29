const Lecture = require('../models/lectures');
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