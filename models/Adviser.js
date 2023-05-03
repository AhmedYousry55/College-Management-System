const mongoose = require('mongoose');
const validator = require('validator');

const AdviserSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true, 'Advisers must have a name'],
    },

    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
      },

      students:[{
        type:mongoose.Schema.ObjectId,
        ref:'Student',
      }],

});

const Adviser = new mongoose.model('Adviser',AdviserSchema );

module.exports = Adviser;