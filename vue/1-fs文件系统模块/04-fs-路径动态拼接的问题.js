// 在使用fs模块操作文件时，如果提供的路径是以./或../开头的相对路径时，很容易出现路径动态凭借错误的问题
// 原因：代码子啊运行的时候，会以执行node命令时所处的目录，动态凭借出被操作文件的完整路径
const fs = require('fs')
// 1；出现路径拼接错误的问题，是因为一个./ ,../开头的相对路径
// ；解决这个问题 给一个绝对路径 完整的文件存放路径
// fs.readFile('./files/1.txt', 'utf8', function (err, dataStr) {
//     if (err) {
//         return console.log('读取文件失败！'+ err.message)
//     }
//     console.log('读取文件成功'+ dataStr)
// })
// 解决路径拼接的问题 复制文件完整路径 选中文件右击 复制路径 需要补全 要俩个\\
// 移植性非常差，不利于维护


// //fs.readFile('D:\\User\\Desktop\\html\\vue\\files\\1.txt', 'utf8', function (err, dataStr) {
//     if (err) {
//         return console.log('读取文件失败！'+ err.message)
//     }
//     console.log('读取文件成功'+ dataStr)
// })
// 最终解决方案 __dirname 表示当前文件所处的目录
// console.log(__dirname)
fs.readFile(__dirname + '/files/1.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败！'+ err.message)
    }
    console.log('读取文件成功'+ dataStr)
})