/**
 * @description user service
 * @author th
 */

const { User } = require('../db/model/index');
const { formatUser } = require('./_format');

/**
 * 获取用户信息
 * @param {string} userName 
 * @param string password 
 */
async function getUserInfo(userName, password) {
  // 查询条件
  const whereOpt = {
    userName
  };
  if (password) {
    Object.assign(whereOpt, { password });
  };
  // query
  const result = await User.findOne({
    attributes: ['id', 'userName', 'nickName', 'picture', 'city'],
    where: whereOpt
  });
  if (result == null) {
    // 未找到
    return result;
  }
  // 格式化
  const formatResult = formatUser(result.dataValues)
  return formatResult;
}

/**
 * 创建用户
 * @param {string} userName 
 * @param {string} password 
 * @param {number} gender 
 * @param {string} nickName 
 */
async function createUser({ userName, password, gender = 3 , nickName }) {
  const result = await User.create({
    userName,
    password,
    nickName: nickName ? nickName : userName,
    gender
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
      userName
    }
  });
  // result 删除的行数
  return result > 0;
}

module.exports = {
  getUserInfo,
  createUser,
  deleteUser
}