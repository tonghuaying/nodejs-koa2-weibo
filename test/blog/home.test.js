/**
 * @description 首页 test
 * @author th
 */

const server = require("../server");
const { L_COOKIE } = require('../testUserInfo');

// 存储微博id
let BLOG_ID = '';

test('创建一条微博，应该成功', async () => {
  // 定义测试内容
  const content = '单元测试自动创建的微博_' + Date.now()
  const image = 'https://img2.baidu.com/it/u=2422288578,3561218937&fm=253&fmt=auto?w=200&h=200'

  // 开始测试
  const res = await server
      .post('/api/blog/create')
      .send({
          content,
          image
      })
      .set('cookie', L_COOKIE)
  expect(res.body.errno).toBe(0)
  expect(res.body.data.content).toBe(content)
  expect(res.body.data.image).toBe(image)

  // 记录微博 id
  BLOG_ID = res.body.data.id
})
