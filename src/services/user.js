/**
 * @description user service
 * @author th
 */

const { User } = require("../db/model/index");
const { formatUser } = require("./_format");

/**
 * 获取用户信息
 * @param {string} userName
 * @param string password
 */
async function getUserInfo(userName, password) {
	// 查询条件
	const whereOpt = {
		userName,
	};
	if (password) {
		Object.assign(whereOpt, { password });
	}
	// query
	const result = await User.findOne({
		attributes: ["id", "userName", "nickName", "picture", "city"],
		where: whereOpt,
	});
	if (result == null) {
		// 未找到
		return result;
	}
	// 格式化
	const formatResult = formatUser(result.dataValues);
	return formatResult;
}

/**
 * 创建用户
 * @param {string} userName
 * @param {string} password
 * @param {number} gender
 * @param {string} nickName
 */
async function createUser({ userName, password, gender = 3, nickName }) {
	const result = await User.create({
		userName,
		password,
		nickName: nickName ? nickName : userName,
		gender,
	});
	return result.dataValues;
}

/**
 * 删除用户
 * @param {string} userName 用户名
 */
async function deleteUser(userName) {
	const result = await User.destroy({
		where: {
			userName,
		},
	});
	// result 删除的行数
	return result > 0;
}

/**
 * 更新用户信息
 * @param {object} param0  要修改的内容
 * @param {object} param1 查询条件
 */
async function updateUser(
	{ newPassword, newNickName, newPicture, newCity },
	{ userName, password }
) {
	// 拼接修改内容
	const updateData = {};
	if (newPassword) {
		updateData.password = newPassword;
	}
	if (newNickName) {
		updateData.nickName = newNickName;
	}
	if (newPicture) {
		updateData.picture = newPicture;
	}
	if (newCity) {
		updateData.city = newCity;
	}
	// 拼接查询条件
	const whereData = {
		userName,
	};
	if (password) {
		whereData.password = password;
	}
	// 执行修改
	const result = await User.update(updateData, {
		where: whereData,
	});
	return result[0] > 0;
}

module.exports = {
	getUserInfo,
	createUser,
	deleteUser,
	updateUser,
};
