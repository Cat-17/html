const path = require('path')

// 使用path.basename（）方法 （里面有2个参数 文件存放的路径 可以获取文件的名称 去掉扩展名可以从一个文件路径中，获取到文件的名称部分

// 定义文件的的存放路径
const fpath = '/b/a/c/index.html'
const fullName = path.basename(fpath)
console.log(fullName) // index.html
 const nameWithoutExt =  path.basename(fpath, 'html')
console.log(nameWithoutExt) // index.


// path.extname()方法 可以获取路径中扩展名部分 语法格式如下
 const pathStr = path.extname(fpath)
console.log(pathStr) // .html