/**
 * @description 微博数据模型测试
 * @author th
 */

 const { Blog } = require('../../src/db/model/index')

 test('Blog 模型的各个属性，符合预期', () => {
     const blog = Blog.build({
         userId: 1,
         content: 'content',
         image: 'https://img1.baidu.com/it/u=1072832925,651922486&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200'
     })
     expect(blog.userId).toBe(1)
     expect(blog.content).toBe('content')
     expect(blog.image).toBe('https://img1.baidu.com/it/u=1072832925,651922486&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200')
 })
 
 
 
 