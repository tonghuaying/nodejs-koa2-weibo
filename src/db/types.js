/**
 * @description 封装 sequelize 数据模型
 * @author th
 */

const Sequelize = require("sequelize");

module.exports = {
	STRING: Sequelize.STRING,
	DECIMAL: Sequelize.DECIMAL,
	TEXT: Sequelize.TEXT,
	INTEGER: Sequelize.INTEGER,
	BOOLEAN: Sequelize.BOOLEAN,
};
