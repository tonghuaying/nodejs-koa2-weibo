/**
 * @description user controller
 * @author th
 */
const { getUserInfo } = require("../services/user");
const { SuccessModel, ErrorModel } = require("../model/ResModel");
const { resisterUsernameNotExistInfo } = require('../model/ErrorInfo');
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
    return new ErrorModel(resisterUsernameNotExistInfo);
	}
}

module.exports = {
	isExist,
};
