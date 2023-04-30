// const mongoose = require('mongoose');
// const validator = require('validator');
// const bcrypt = require('bcryptjs');

// const studentProfileSchema = new mongoose.Schema({
//   id: {
//     type: Number,
//     required: [true, 'student must have an id'],
//     unique: true,
//   },
//   name: {
//     type: String,
//     required: [true, 'Student must have a name'],
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: [true, 'Please provide your email'],
//     unique: true,
//     lowercase: true,
//     validate: [validator.isEmail, 'Please provide a valid email'],
//   },
//   contact_num: {
//     type: Number,
//     unique: true,
//   },
//   age: {
//     type: Number,
//     required: [true, 'please tell us your age'],
//   },
//   gender: String,
//   password: {
//     type: String,
//     required: [true, 'Please provide a password'],
//     minlength: 8,
//   },
//   passwordConfirm: {
//     type: String,
//     required: [true, 'Please confirm your password'],
//     validate: {
//       // This only works on CREATE and SAVE!!!
//       validator: function (el) {
//         return el === this.password;
//       },
//       message: 'Passwords are not the same!',
//     },
//   },
//   semester: {
//     type: Number,
//     required: [true, 'the semester must be included'],
//   },
//   total_acheivments: Number,
//   warnings: String,
//   joiningDate: Number,
//   advisersid: Number,
//   role: String,

// });

// studentProfileSchema.pre('save', async function (next) {
//   // Only run this function if password was actually modified
//   if (!this.isModified('password')) return next();

//   // Hash the password with cost of 12
//   this.password = await bcrypt.hash(this.password, 12);

//   // Delete passwordConfirm field
//   this.passwordConfirm = undefined;
//   next();
// });

// const Student = new mongoose.model('Studnet', studentProfileSchema);

// module.exports = Student;
