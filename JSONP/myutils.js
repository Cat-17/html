// 跨域数据 的判断
function maAjax(obj) {
    if (obj.dadaType == "jsonp") {
        maAjax4Across(obj)
    } else {
        mtAjax4Normal(obj)
    }
}
function maAjax4Across(obj) {
    // 封装的四步骤
    // 1；什么是变的，需要变化的 我们通过传递参数的方式
    // 2；什么是不变的 不变的我们需要提炼到方法体当中进行实现
    // 3；如何通知调用者  
    // 4;调用如何方便起来  不考虑先后顺序 不用写默认值
    // 业务逻辑模拟 obj传递回来的数据
    // obj = {

    //     url: "https://suggest.taobao.com/sug",
    //     data: { q: "123", pwd: "123456" },
    //     success:function(data){}


    // }

    // 定义一些默认值
    var defaulst = {
        type: "get",
        url: "#",
        data: {},
        success: function (data) { },
        jsonp: "callback",
        jsonpCallback:"hehe"
    }
    // obj传递过来的数据覆盖defaulst  里面的属性
    // 1；如果有一些属性只存在obj中，会给defalts中增加属性
    // 2；如果有一些属性在obj和defalts都存在，会在defalts中默认覆盖
    // 3；如果有一些属性只在defalts中存在，在obj中不存在 这还是defalts将保留预定义的属性
    for(var key in obj){
        defaulst[key] = obj[key]
    }
    var params = ""
    for (var attr in defaulst.data) {
        params += attr + "=" + defaulst.data[attr] + "&"
        
    }
    if (params) {
        params += params.substring(0, params.length - 1)
        defaulst.url += "?" + params
    }
    defaulst.url += "&"+defaulst.jsonp+ "=" + defaulst.jsonpCallback

    console.log(defaulst.url);

    var script = document.createElement("script")
    script.src = defaulst.url
    // 给window 添加一个方法 通知调用者 
    window[defaulst.jsonpCallback] = function (data) {
        defaulst.success(data)
    }

    var head = document.querySelector("head")

    head.appendChild(script)



}


function mtAjax4Normal(obj) {
    var defalts = {
        type: "get",
        url: "#",
        dadaType: "json",
        data: {},
        async: true,
        success:function(result){console.log(result);}
    
   
    }
    // obj中的属性，覆盖到defalts中属性
    // 1；如果有一些属性只存在obj中，会给defalts中增加属性
    // 2；如果有一些属性在obj和defalts都存在，会在defalts中默认覆盖
    // 3；如果有一些属性只在defalts中存在，在obj中不存在 这还是defalts将保留预定义的
    for (var key in obj) {
        defalts[key] = obj[key]
        
    }
    var xhr = null
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()

    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }
    // 得到params
    // data:{
    //     uname: "zhangshan",
    //     age:"18"
    // } // 变成这样的字符串uname=zhangshan&age=18
    var params = ""
    for (var attr in defalts.data) {
        params += attr + "=" + defalts.data[attr] + "&"
    }
    if (params) {
        params = params.substring(0,params.length - 1)
    }
    if (defalts.type == "get") {
        defalts.url += "?" + params
        
    }
    xhr.open(defalts.type, defalts.url, defalts.async)
    if (defalts.type == "get") {
        xhr.send(null)
    } else if (defalts.type == "post") {
        xhr.setRequestHeader("Content-type", "application/x-www-fprm-urlencoded")
        xhr.send(params)
    }
    // 判断同步异步 
    if (defalts.async) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var result = null
                    if (defalts.dadaType == "json") {
                        result = xhr.responseText
                        result = JSON.parse(result)
                    } else if (defalts.dadaType == "xml") {
                        result = xhr.responseXML
                    } else {
                        result = xhr.responseText

                    }
                    defalts.success(result)
                }
            }
        }
    } else {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var result = null
                if (defalts.dadaType == "json") {
                    result = xhr.responseText
                    result = JSON.parse(result)
                } else if (defalts.dadaType == "xml") {
                    result = xhr.responseXML
                } else {
                    result = xhr.responseText

                }
                defalts.success(result)
            }
        }
        
    }
       
}