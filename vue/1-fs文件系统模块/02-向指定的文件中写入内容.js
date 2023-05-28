const fs = require('fs')
// 调入fs.writeFile方法 写入文件的内容
// 参数1 表示文件的存放路径 可以在files目录下自动生成一个文件 
// 参数2；表示要写入的内容
// 参数3 ：回调函数
fs.writeFile('./files/2.txt', '1111', function (err) {
    //如果文件写入成功 则err的值 null
    // 如果文件写入失败 则 err的值等于一个错误对象
    // console.log(err) 

    
    
    // 判断文件是否读取成功或者失败
    if (err) {
        return console.log('文件写入失败'+ err.message)
    }
    console.log('文件写入成功')
})