const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createClass = {
  body: Joi.object().keys({
    classCode: Joi.string().required(),
    name: Joi.string().required(),
    quantily: Joi.number().required(),
    teacherCode: Joi.string().required(),
  }),
};

const getClasses = {
  query: Joi.object().keys({
    classCode: Joi.string(), 
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getClass = {
  params: Joi.object().keys({
    classCode: Joi.string().required(), 
  }),
};

const updateClass = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  body: Joi.object()
    .keys({
        classCode: Joi.string().required(),
        name: Joi.string().required(),
        quantily: Joi.number().required(),
        teacherCode: Joi.string().required(),
    })
    .min(1),
};

const deleteClass= {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

module.exports = {
  createClass,
  getClasses,
  getClass,
  updateClass,
  deleteClass,
};
