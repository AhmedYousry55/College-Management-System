const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Lecture must have a name'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'Lecture must have a maximum group size'],
    min: 30,
    max: 60,
  },
  hall: {
    type: String,
    required: [true, 'Lecture must include the hall'],
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    },
  ],
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Staff',
    required: [true, 'Lecture must have a doctor'],
  },

  time: {
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
  },

  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

lectureSchema.index({ location: '2dsphere' });
lectureSchema.pre(/^find/, function (next) {
  this.populate({ path: 'students' })
  .populate({ path: 'Doctor' })
  next();
});
const Lecture = mongoose.model('Lecture', lectureSchema);

module.exports = Lecture;

// const mongoose = require('mongoose');

// const lectureSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'lab must have a name'],
//   },
//   maxGroupSize: {
//     type: Number,
//     required: [true, ' A lecture must have a limit'],
//     select: false,
//     min: 30,
//     max: 60,
//   },
//   hall: {
//     type: String,
//     required: [true, 'lecture must include the hall'],
//   },
//   students: [
//     {
//       type: mongoose.Schema.ObjectId,
//       ref: 'Student',
//     },
//   ],

//   Doctor: [
//     {
//       type: mongoose.Schema.ObjectId,
//       ref: 'Staff',
//     },
//   ],

//   time: String,
// });