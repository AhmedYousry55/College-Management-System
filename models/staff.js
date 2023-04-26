const validator = require('validator');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  id:{
    type:Number,
    required:[true ,' staff member should have an id'],
    unique:true,
  },
    name: {
      type: String,
      required: [true, 'Name is required!!'],
    },
    email: {
      type: String,
      required: [true, 'please provide your email address'],
      lowercase: true,
      unique: true,
      validate: [validator.isEmail, 'please provide a valid email'],
    },
    office_hours:{
      type:String,
    },
    contact_num: Number,
    gender:String,
    role:String,
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'please provide your password'],
      validate: {
        //this inly works on create and save , if we update the password this function will no longer work.
        validator: function (el) {
          return el === this.password;
        },
        message: 'passwords are not the same',
      },
    },
    
  });
  
  staffSchema.pre('save', async function (next) {
    //this function runs only when the password is changed
    if (!this.isModified('password')) return next();
  
    //hash the password with cost of 12
  
    this.password = await bcrypt.hash(this.password, 12);
  
    //delete the password confirm , it's not gonna be saved into the database
    this.passwordConfirm = undefined;
  
    next();
  });
  
  const Staff = new mongoose.model('Staff', staffSchema);
  
  module.exports = Staff;