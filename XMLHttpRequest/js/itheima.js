// 处理data函数
// 需要吧data对象 。转化成查询字符串格式，从而提交给服务器，因此提前定义resolveData函数
function resolveData(data) {
    var arr = []
    for (var k in data) {
        var str = k + '=' + data[k]
        // 获得的数据追加到空数组里面
        arr.push(str)
    }
    return arr.join('&')

}
// var res = resolveData({ age: 20 })
// console.log(res)

function itheima(options) {
    // 定义一个 xhr对象
    var xhr = new XMLHttpRequest()
    // 把外界传递过来的参数对象，转换为查询字符串
    var qs = resolveData(options.data)

    // 外界传递过来的参数对象做一个判断请求 get post
    if (options.method.toUpperCase() === 'GET') {
        // 发起get请求
        xhr.open(options.method, options.url + '?' + qs)
        xhr.send()

    } else if (options.method.toUpperCase() === 'POST') {
        // 发起post请求
        xhr.open(options.method, options.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(qs)

    }
    
    // 监听事件
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            //  xhr.responseText是json字符串 这里换成成js对象
            var result = JSON.parse(xhr.responseText)
            // 
            options.success(result)
            
        }
    }
    
    
}