const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const classSchema = mongoose.Schema(
  {
    id:{
        type: mongoose.Schema.Types.ObjectId
    },
    classCode: {
      type: String,
      required: true,
      trim: true
    },
    name: {
      type: String,
      required: true,
    },
    quantily: {
      type: Number,
      required: true,
    },
    teacherCode: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
classSchema.plugin(toJSON);
classSchema.plugin(paginate);

/**
 * @typedef Student
 */
const Class = mongoose.model('Class', classSchema);

module.exports = Class;
