const router = require('koa-router')();
const user = require('../controller/user');
const token = require('../utils/token');

router.prefix('/users').use(token);

router.get('/', user.index);
router.post('/send/:id', user.send);

module.exports = router;
