// path模块式Node.js官方提供的，用来处理路径的模块，它提供了一系列的方法和属性，用来满足用户对路径的处理需求
 const fs = require('fs')
// 导入psth 模块
const path = require('path')
// 调用path
// ../ 会抵消前面的路径
// pach.join()//用来将多个路径片段拼接成一个完整的路径字符串
const pathStr1 = path.join('/a','/b/c','../','/d','e')
// console.log(pathStr1) // \a\b\d\e
//  fs.readFile()方法用来读取指定文件中的内容 -->
const pathStr2 = fs.readFile(path.join(__dirname, './files/1.txt'), 'utf8', function (err, dataStr) {
    if (err) {
        return console.log(err.message)
    }
    console.log(dataStr)
//    
})


// console.log(pathStr2) // \User\Desktop\html\vue\2-path路径模块\files\1.txt
// 注意，今后但凡涉及到路径拼接的操作，都要使用path.join()方法进行处理，不要直接使用+进行字符串的拼接


