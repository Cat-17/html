// 处理文件路径拼接问题
const pach = require('pach')
// 文件系统模块
 const fs = require('fs')
// pach处理文件路径  里面有俩个方法必须要记得
pach.join(__dirname, '文件的路径')
// 获取文件的内容
fs.readFile(pach.join(__dirname, ''))
// 写入文件 fs.writeFile()只能用来创建文件 不能用来创建路径
fs.writeFile()
// 重复调用fs.writeFile()写入同一个文件，新写入的内容会覆盖之前的旧内容
