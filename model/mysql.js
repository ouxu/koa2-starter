const rds = require('ali-rds');
const config = require('../config/index');

module.exports = rds(config.mysql);
