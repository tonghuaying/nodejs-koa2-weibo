/**
 * @description user controller
 * @author th
 */
const { getUserInfo, createUser } = require("../services/user");
const { SuccessModel, ErrorModel } = require("../model/ResModel");
const { registerUserNameNotExistInfo, registerFailInfo, registerUserNameExistInfo } = require('../model/ErrorInfo');

const doCrypto = require('../utils/cryp');

/**
 * 用户名是否存在
 * @param {string} userName 用户名
 */
async function isExist(userName) {
	const userInfo = await getUserInfo(userName);
	if (userInfo) {
		// 用户名已存在
    // { errno: 0, data: {...}}
    return new SuccessModel(userInfo);
	} else {
		// 用户名不存在
    // { errno: 10003, message: '用户名已存在' }
    return new ErrorModel(registerUserNameNotExistInfo);
	}
}

/**
 * 注册
 * @param {string} userName 用户名
 * @param {string} password 密码
 * @param {number} gender  性别（1 男 2 女 3 保密）
 */
async function register({ userName, password, gender }) {
	const userInfo = await getUserInfo(userName);
	if (userInfo) {
		// 用户名已存在
		return new ErrorModel(registerUserNameExistInfo);
	}
	// 注册 service
	try {
		await createUser({
			userName,
			password: doCrypto(password),
			gender
		});
		return new SuccessModel();
	} catch(ex) {
		console.error(ex.message, ex.stack);
		return new ErrorModel(registerFailInfo);
	}
}

module.exports = {
	isExist,
	register
};
