/**
 * Created by out_xu on 17/7/2.
 */
const path = require('path');
const cors = require('@koa/cors');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const bouncer = require('koa-bouncer');
const restc = require('restc');
const koaStatic = require('koa-static');

module.exports = (app) => {
  app.use(logger());
  app.use(cors({ credentials: true }));
  app.use(bodyParser());
  app.use(bouncer.middleware());
  app.use(restc.koa2());
  app.use(koaStatic(path.resolve(process.cwd(), './public')));
};
