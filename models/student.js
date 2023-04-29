// const validator = require('validator');
// const bcrypt = require('bcryptjs');

// const studentSchema = new mongoose.Schema({
//     name: {
//       type: String,
//       required: [true, 'Name is required!!'],
//     },
//     email: {
//       type: String,
//       required: [true, 'please provide your email address'],
//       lowercase: true,
//       unique: true,
//       validate: [validator.isEmail, 'please provide a valid email'],
//     },
//     photo: String,
//     password: {
//       type: String,
//       required: true,
//       minlength: 8,
//     },
//     passwordConfirm: {
//       type: String,
//       required: [true, 'please provide your password'],
//       validate: {
//         //this inly works on create and save , if we update the password this function will no longer work.
//         validator: function (el) {
//           return el === this.password;
//         },
//         message: 'passwords are not the same',
//       },
//     },
//   });
  
//   userSchema.pre('save', async function (next) {
//     //this function runs only when the password is changed
//     if (!this.isModified('password')) return next();
  
//     //hash the password with cost of 12
  
//     this.password = await bcrypt.hash(this.password, 12);
  
//     //delete the password confirm , it's not gonna be saved into the database
//     this.passwordConfirm = undefined;
  
//     next();
//   });
  
//   const User = new mongoose.model('User', userSchema);
  
//   module.exports = User;