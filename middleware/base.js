/**
 * Created by out_xu on 17/7/2.
 */
const path = require('path');
const convert = require('koa-convert');
const cors = require('kcors');
const logger = require('koa-logger');
const parameter = require('koa-parameter');
const bodyParser = require('koa-bodyparser');
const bouncer = require('koa-bouncer');
const restc = require('restc');
const koaStatic = require('koa-static');

module.exports = (app) => {
  app.use(convert(cors({ credentials: true })));
  app.use(convert(logger()));
  app.use(bodyParser());
  app.use(convert(parameter(app)));
  app.use(bouncer.middleware());
  app.use(restc.koa2());
  app.use(koaStatic(path.resolve(process.cwd(), './public')));
};
