const indexRouter = require('koa-router')();
const indexController = require('../controller/index');

const users = require('./users');

indexRouter.get('/', indexController.index);

module.exports = [
  indexRouter,
  users,
];
