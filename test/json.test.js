/**
 * @description json test
 * @author th
 */
const server = require('./server');

test('json request', async() => {
  const res = await server.get('/string');
  expect(res.text).toBe('koa2 string');
})