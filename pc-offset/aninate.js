function animate(obj, target, callback) {
    // console.log(callback)//打印callback = function(){}  调用的时候callback()

    //当我们不断的点击按钮。这个元素的速度会越来越快，因为开启了太多了定时器
    // 先清除以前的定时器，只保留当前的一个定时器
    clearInterval(obj.timer)
    // 给不同的元素指定不同的定时器
    obj.timer = setInterval(function () {
        // 步长值写在定时器的里面
        //把我们步长值 取整 往上取整
        // var step = Math.ceil((target - obj.offsetLeft) / 10)
        var step = (target - obj.offsetLeft) / 10
        // 判断如果你是大于0 就执行取整往大了取 小于0就往小了取
        step = step > 0 ? Math.ceil(step) : Math.floor(step)

        if (obj.offsetLeft == target) {
            // 停止动画 本质是定时器
            clearInterval(obj.timer)
            // 回调函数写到定时器结束里面
            if (callback) {
                // 调用函数
                callback()
            }
        }

        //获得当前位置
        // offsetLeft 是获取  style是修改元素
        // 把每次加1 这个步长值改为一个慢慢变小的值
        // （目标值-现在的位置）/ 10 作为每次移动的距离步长
        obj.style.left = obj.offsetLeft + step + 'px'
    }, 15)
}
