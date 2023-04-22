const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { classService } = require('../services');

const createClass = catchAsync(async (req, res) => {
  const classs = await classService.createClass(req.body);
  res.status(httpStatus.CREATED).send(classs);
});

const getClasses = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await classService.queryClasses(filter, options);
  res.send(result);
});

const getClass = catchAsync(async (req, res) => {
  const classs = await classService.getClassById(req.params.id);
  if (!classs) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Class not found');
  }
  res.send(classs);
});

const updateClass = catchAsync(async (req, res) => {
  const classs = await classService.updateClassById(req.params.id, req.body);
  res.send(classs);
});

const deleteClass = catchAsync(async (req, res) => {
  await classService.deleteClassById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createClass,
  getClasses,
  getClass,
  updateClass,
  deleteClass,
};
