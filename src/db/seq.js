/**
 * @description sequelize 实例
 * @author th
 */
const Sequelize = require("sequelize");
const { MYSQL_CONF } = require("../conf/db");
const { isProd, isTest } = require("../utils/env");

const { host, user, password, database } = MYSQL_CONF;
const config = {
	host,
	dialect: "mysql",
};

if (isTest) {
	// 测试时，不打印 sql 语句
	config.logging = () => {};
}

// 线上环境，使用连接池
if (isProd) {
	config.pool = {
		max: 5, // 连接池中最大的连接数量
		min: 0,
		idle: 10000, // 如果一个连接池 10s 之内没有被使用，则释放
	};
}

const seq = new Sequelize("koa2_weibo_db", user, password, config);

module.exports = seq;
