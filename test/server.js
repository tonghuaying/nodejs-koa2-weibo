/**
 * @description jest server
 * @author th
 */

 const request = require('supertest')
 const server = require('../src/app').callback()
 
 module.exports = request(server)