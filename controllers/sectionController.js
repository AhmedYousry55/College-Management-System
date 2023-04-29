const Section = require('../models/sections');
const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');

//4) Sections Handler factory

exports.getAllSections = factory.getAll(Section);
exports.CreateSection = factory.createOne(Section);
exports.getOneSection = factory.getOne(Section);
exports.updateSection = factory.updateOne(Section);
exports.deleteSection = factory.deleteOne(Section);
