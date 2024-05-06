/**
 * @description 加密方法
 * @author th
 */

const cryto = require("crypto");
const { CRYPTO_SECRET_KEY } = require("../conf/secretKeys");

/**
 * md5 加密
 * @param {string} content 明文
 */
function _md5(content) {
	const md5 = cryto.createHash("md5");
	return md5.update(content).digest("hex");
}

/**
 * 加密方法
 * @param {string} content 明文
 */
function doCrypto(content) {
	const str = `password=${content}&key=${CRYPTO_SECRET_KEY}`;
	return _md5(str);
}

module.exports = doCrypto;
