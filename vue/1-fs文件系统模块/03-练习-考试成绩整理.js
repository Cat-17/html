// const fs = require('fs')
// // 调用fs.readFile方法 读取素材目录下的成绩.txt文件
// fs.readFile('./files/3.成绩.txt', 'utf8', function (err,dataStr) {
//     if (err) {
//         return console.log('读取文件失败！'+ err.message)
//     }
//     // console.log('文件读取成功：'+ dataStr)
//     // 1;先把成绩的数据，按照空格进行分割
//     // 循环分割后的数组，对每一项数据，进行字符串的拼接
//     // 把新数组的每一项。进行合并，得到一个新的字符串
//     const arrOld = dataStr.split('')
//     const arrNew = []
//     arrOld.forEach(item => {
//         arrNew.push(item.replace('=',': '))
//     })
//    const newStr = arrNew.join('\r\n')
//     console.log(newStr)
//     fs.writeFile('./files/4.成绩-ok.txt', newStr, function (err) {
//         if (err) {
//             return console.log('写入文件失败！'+ err.message);
//         }
//         console.log('文件写入成功:')
//     })
    
// })
// 判断文件是否读取失败
// 文件读取成功后，处理成绩数据
// 将处理完成的成绩数据，调用 fs 方法 写入到新文件成绩-ok.txt中


// 1. 导入 fs 模块
const fs = require('fs')

// 2. 调用 fs.readFile() 读取文件的内容

fs.readFile('./files/3.成绩.txt', 'utf8', function(err, dataStr) {
  // 3. 判断是否读取成功
  if (err) {
    return console.log('读取文件失败！' + err.message)
  }
  // console.log('读取文件成功！' + dataStr)

  // 4.1 先把成绩的数据，按照空格进行分割
  const arrOld = dataStr.split(' ')
  // 4.2 循环分割后的数组，对每一项数据，进行字符串的替换操作
  const arrNew = []
  arrOld.forEach(item => {
    arrNew.push(item.replace('=', ': '))
  })
  // 4.3 把新数组中的每一项，进行合并，得到一个新的字符串
    const newStr = arrNew.join('\r\n')
    console.log(newStr)

  // 5. 调用 fs.writeFile() 方法，把处理完毕的成绩，写入到新文件中
  fs.writeFile('./files/4.成绩-ok.txt', newStr, function(err) {
    if (err) {
      return console.log('写入文件失败！' + err.message)
    }
    console.log('成绩写入成功！')
  })
})