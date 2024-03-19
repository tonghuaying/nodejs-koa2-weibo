const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/login', async (ctx, next) => {
  const { username, password} = ctx.request.body;
  // 登陆验证的逻辑
  ctx.body = {
    username,
    password
  }
})

module.exports = router
