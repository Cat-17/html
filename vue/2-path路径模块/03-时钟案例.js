// 1.2 导入 fs 文件系统模块  读取文件
const fs = require('fs')
// 1.2 导入 path 路径处理模块 读取文件路径
const path = require('path')

// 1.3 匹配 <style></style>标签的正则表达式
// 其中\s表示空白字符 \S 表示非空白字符 * 表示匹配任意次
// \代表转义 不然跟正则表达式// 冲突了
const regStyle = /<style>[\s\S]*<\/style>/
// 1.4 匹配<script></script>标签的正则表达式
const regScript = /<script>[\s\S]*<\/script>/

// 2.1 读取需要被处理的HTML 文件
fs.readFile(path.join(__dirname, './files/index.html'), 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败！' + err.message)
    }

    // 2.3 读取文件成功后，调用对应的三个方法 分别拆解处css js html 文件
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

// 3.1  自定义处理css 样式的方法
function resolveCSS(htmlStr) {
    // 3.2 使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr)
    // console.log(r1) 返回的是一个数组形式的数据
    // 3.3 将提取出来的样式字符串，进行字符串的  replace（）替换操作
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    console.log(newCSS)
    // 3.4 调用 将提取的样式写入 clock 目录中 index.css 的文件里面
    // <!-- fs.writeFile()方法，用来向指定的文件中写入内容 -->
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function (err) {
        if (err) return console.log('写入css 样式失败！' + err.message)
        console.log('写入样式文件成功')
    })
}

// 4.1 处理 js脚本
function resolveJS(htmlStr) {
    // 3.2 使用正则提取需要的内容
    const r2 = regScript.exec(htmlStr)
    // console.log(r2) 返回的是一个数组形式的数据
    // 3.3 将提取出来的样式字符串，进行字符串的  replace（）替换操作
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
    console.log(newJS)
    // 3.4 调用 将提取的样式写入 clock 目录中 index.css 的文件里面
    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function (err) {
        if (err) return console.log('写入JavaScrip 样式失败！' + err.message)
        console.log('写入js样式文件成功')
    })
}

// 5.1 处理html 文件
function resolveHTML(htmlStr) {
    const newHTML = htmlStr
        // 5.1 使用字符串的replace方法 把内嵌的style scrpit 标签，替换为外联的link 和script 标签
       .replace(regStyle, '<link rel="stylesheet" href="./index.css">')
       .replace(regScript, '<script src="./index.js"></script>')
       
    // 5.2 将替换完成之后的 html 代码 写入到index.html文件中
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function(err){
        if (err) return console.log('写入html 文件失败！' + err.message)
        console.log('写入html 页面成功')
    })

}


