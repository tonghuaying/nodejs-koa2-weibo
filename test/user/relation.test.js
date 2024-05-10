/**
 * @description 用户关系 单元测试
 * @author th
 */

 const server = require('../server')
 const { getFans, getFollowers } = require('../../src/controller/user-relation')
 const {
     Z_ID,
     Z_USER_NAME,
     Z_COOKIE,
     L_ID,
     L_USER_NAME,
     L_COOKIE
 } = require('../testUserInfo')
 
 // 先让 luck 取消关注 zhangsan（为了避免现在 luck 关注了zhangsan）
 test('无论如何，先取消关注', async () => {
     const res = await server
         .post('/api/profile/unFollow')
         .send({ userId: Z_ID })
         .set('cookie', L_COOKIE)
     expect(1).toBe(1)
 })
 
 // 添加关注
 test('luck 关注 zhangsan ，应该成功', async () => {
     const res = await server
         .post('/api/profile/follow')
         .send({ userId: Z_ID })
         .set('cookie', L_COOKIE)
     expect(res.body.errno).toBe(0)
 })
 
 // 获取粉丝
 test('获取 zhangsan 的粉丝，应该有 luck', async () => {
     const result = await getFans(Z_ID)
     const { count, fansList } = result.data
     const hasUserName = fansList.some(fanInfo => {
         return fanInfo.userName === L_USER_NAME
     })
     expect(count > 0).toBe(true)
     expect(hasUserName).toBe(true)
 })
 
 // 获取关注人
 test('获取 luck 的关注人，应该有 zhangsan', async () => {
     const result = await getFollowers(L_ID)
     const { count, followersList } = result.data
     const hasUserName = followersList.some(followerInfo => {
         return followerInfo.userName === Z_USER_NAME
     })
     expect(count > 0).toBe(true)
     expect(hasUserName).toBe(true)
 })
 
 
 
 // 取消关注
 test('luck 取消关注 zhangsan，应该成功', async () => {
     const res = await server
         .post('/api/profile/unFollow')
         .send({ userId: Z_ID })
         .set('cookie', L_COOKIE)
     expect(res.body.errno).toBe(0)
 })
 