const router = require('koa-router')();
const UsersController = require('../controller/users');
const token = require('../utils/token');

router.prefix('/users').use(token).get('/', UsersController.index).post('/send/:id', UsersController.send);

module.exports = router;
