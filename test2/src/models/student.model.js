const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const studentSchema = mongoose.Schema(
  {
    studentCode: {
      type: String,
      required: true,
      trim: true,
    },
    born: {
      type: Date,
    },
    gender: {
      type: Boolean,
      default: false
    },
    address: {
      type: String,
      trim: true
    },
    grade: {
        type: Number,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
studentSchema.plugin(toJSON);
studentSchema.plugin(paginate);

/**
 * @typedef Student
 */
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
