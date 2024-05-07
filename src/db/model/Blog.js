/**
 * @description 微博数据模型
 * @author th
 */

const seq = require("../seq");
const { STRING, TEXT, INTEGER } = require("../types");

const Blog = seq.define("blog", {
	userId: {
		type: INTEGER,
		allowNull: false,
		comment: "用户 id",
	},
	content: {
		type: TEXT,
		allowNull: false,
		comment: "微博内容",
	},
	image: {
		type: STRING,
		comment: "图片",
	},
});

module.exports = Blog;
