// 导入fs模块 require('fs') 用常量来接收 const
const { log } = require('console');
const fs = require('fs')



// 调用fs.resaFile()方法
// 参数l: 读取文件的路径
// 参数2：读取文件的编码格式 utf8 一般默认情况下都是这个方式
// 参数3：回调函数 拿到读取失败和成功的结果 俩个参数 err（形参） （获取成功的内容） daraStr（读取成功）
fs.readFile('./files/1.txt', 'utf8', function (err, result) {
    // 读取失败的内容  如果读取成功 则err的值为 null
    // 如果读取失败 则err 的值为错误对象
    // console.log(err)  
    // console.log('-------')
    // 读取成功 文件里面的值 2222 
    // 读取失败 文件的值为 undefined
    // console.log(dataStr)
    
    
    // 判断文件是否读取成功
    
    if (err) {
        return console.log('文件读取失败！'+ err.message);
    }
    console.log('文件读取成功，内容是：'+ result)
    
})