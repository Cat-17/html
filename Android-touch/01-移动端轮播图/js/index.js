// window.addEventListener('load', function() {
//     // alert(1);
//     // 1. 获取元素
//     var focus = document.querySelector('.focus');
//     var ul = focus.children[0];
//     // 获得focus 的宽度
//     var w = focus.offsetWidth;
//     var ol = focus.children[1];
//     // 2. 利用定时器自动轮播图图片
//     var index = 0;
//     var timer = setInterval(function() {
//         index++;
//         var translatex = -index * w;
//         ul.style.transition = 'all .3s';
//         ul.style.transform = 'translateX(' + translatex + 'px)';
//     }, 2000);
//     // 等着我们过渡完成之后，再去判断 监听过渡完成的事件 transitionend
//     ul.addEventListener('transitionend', function() {
//         // 无缝滚动
//         if (index >= 3) {
//             index = 0;
//             // console.log(index);
//             // 去掉过渡效果 这样让我们的ul 快速的跳到目标位置
//             ul.style.transition = 'none';
//             // 利用最新的索引号乘以宽度 去滚动图片
//             var translatex = -index * w;
//             ul.style.transform = 'translateX(' + translatex + 'px)';
//         } else if (index < 0) {
//             index = 2;
//             ul.style.transition = 'none';
//             // 利用最新的索引号乘以宽度 去滚动图片
//             var translatex = -index * w;
//             ul.style.transform = 'translateX(' + translatex + 'px)';
//         }
//         // 3. 小圆点跟随变化
//         // 把ol里面li带有current类名的选出来去掉类名 remove
//         ol.querySelector('.current').classList.remove('current');
//         // 让当前索引号 的小li 加上 current   add
//         ol.children[index].classList.add('current');
//     });

//     // 4. 手指滑动轮播图
//     // 触摸元素 touchstart： 获取手指初始坐标
//     var startX = 0;
//     var moveX = 0; // 后面我们会使用这个移动距离所以要定义一个全局变量
//     var flag = false;
//     ul.addEventListener('touchstart', function(e) {
//         startX = e.targetTouches[0].pageX;
//         // 手指触摸的时候就停止定时器
//         clearInterval(timer);
//     });
//     // 移动手指 touchmove： 计算手指的滑动距离， 并且移动盒子
//     ul.addEventListener('touchmove', function(e) {
//         // 计算移动距离
//         moveX = e.targetTouches[0].pageX - startX;
//         // 移动盒子：  盒子原来的位置 + 手指移动的距离
//         var translatex = -index * w + moveX;
//         // 手指拖动的时候，不需要动画效果所以要取消过渡效果
//         ul.style.transition = 'none';
//         ul.style.transform = 'translateX(' + translatex + 'px)';
//         flag = true; // 如果用户手指移动过我们再去判断否则不做判断效果
//         e.preventDefault(); // 阻止滚动屏幕的行为
//     });
//     // 手指离开 根据移动距离去判断是回弹还是播放上一张下一张
//     ul.addEventListener('touchend', function(e) {
//         if (flag) {
//             // (1) 如果移动距离大于50像素我们就播放上一张或者下一张
//             if (Math.abs(moveX) > 50) {
//                 // 如果是右滑就是 播放上一张 moveX 是正值
//                 if (moveX > 0) {
//                     index--;
//                 } else {
//                     // 如果是左滑就是 播放下一张 moveX 是负值
//                     index++;
//                 }
//                 var translatex = -index * w;
//                 ul.style.transition = 'all .3s';
//                 ul.style.transform = 'translateX(' + translatex + 'px)';
//             } else {
//                 // (2) 如果移动距离小于50像素我们就回弹
//                 var translatex = -index * w;
//                 ul.style.transition = 'all .1s';
//                 ul.style.transform = 'translateX(' + translatex + 'px)';
//             }
//         }
//         // 手指离开的时候就重新开启定时器
//         clearInterval(timer);
//         timer = setInterval(function() {
//             index++;
//             var translatex = -index * w;
//             ul.style.transition = 'all .3s';
//             ul.style.transform = 'translateX(' + translatex + 'px)';
//         }, 2000);
//     });


//     // 返回顶部模块制作
//     var goBack = document.querySelector('.goBack');
//     var nav = document.querySelector('nav');
//     window.addEventListener('scroll', function() {
//         if (window.pageYOffset >= nav.offsetTop) {
//             goBack.style.display = 'block';
//         } else {
//             goBack.style.display = 'none';
//         }
//     });
//     goBack.addEventListener('click', function() {
//         window.scroll(0, 0);
//     })
// })
window.addEventListener('load', function () {
    // alert(1);
    // 1. 获取元素
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    // 获得focus 的宽度
    var w = focus.offsetWidth;
    var ol = focus.children[1];
    // 2. 利用定时器自动轮播图图片
    var index = 0;
    var timer = setInterval(function () {
        index++;
        var translatex = -index * w;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000);
    // 2 ；无缝滚动
    // 注意，我们判断条件要等到图片滚动完毕再去判断，就是过度完成后判断
    // 此时需要添加检测过渡完成事件transitionend
    ul.addEventListener('transitionend', function () {
        // 无缝滚动
        if (index >= 3) {
            index = 0;
            // console.log(index);
            // 去掉过渡效果 这样让我们的ul 快速的跳到目标位置
            ul.style.transition = 'none';
            // 利用最新的索引号乘以宽度 去滚动图片
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 2;
            ul.style.transition = 'none';
            // 利用最新的索引号乘以宽度 去滚动图片
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }
        // 3. 小圆点跟随变化
        // 把ol里面li带有current类名的选出来去掉类名 remove
        ol.querySelector('.current').classList.remove('current');
        // 让当前索引号 的小li 加上 current   add
        ol.children[index].classList.add('current');
    });
    //手指滑动轮播图效果
    // 本质就是ul跟随手指移动 ，简单说就是移动端拖动元素
    // 触摸元素 touchstart ：获取手指初始坐标
    var startX = 0
    var moveX = 0 //后面我们会使用这个 声明一个全部变量
    flag = false
    ul.addEventListener('touchstart', function (e) {
        // 当前手指的坐标
        startX = e.targetTouches[0].pageX
        // 手指触摸的时候就停止定时器
        clearInterval(timer)

    })
    // 移动手指touchmove ： 计算手指的滑动距离 ，并且移动盒子
    ul.addEventListener('touchmove', function (e) {
        // 计算移动距离 
        moveX = e.targetTouches[0].pageX = startX
        //    移动盒子：盒子原来的位置 + 手指移动的距离
        var translatex = -index * w + moveX
        //让盒子动起来
        // 手指拖动的时候，不要动画效果所以要取消过渡效果
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
        flag = true // 如果用户手指移动过我们再去判断否则不做判断效果
        e.preventDefault()//阻止滚动屏幕的行为

    })
    // 手指离开 根据移动距离判断是回弹还是播放上一张下一张
    ul.addEventListener('touchend', function (e) {
        // 如果移动距离大于50像素我们就播放上以上或者下一张
        // 取绝对值
        if (flag) {
            if (Math.abs(moveX) > 50) {
                // 如果是右滑就是 播放上一张 moveX是正值
                if (moveX > 0) {
                    index--
                } else {
                    // 如果是左滑就是 播放下一张 moveX是负值
                    index++
                }
                var translatex = -index * w
                ul.style.transition = 'all .3s'
                ul.style.transform = 'translateX(' + translatex + 'px)'


            } else {
                // (2) 如果移动距离小于50像素我们就回弹
                var translatex = -index * w
                ul.style.transform = 'translateX(' + translatex + 'px)'
            }
        }
        // 手指离开的时候就重新开启定时器
        clearInterval(timer)
        timer = setInterval(function () {
            index++;
            var translatex = -index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }, 2000)

    })

    //返回顶部
    // 当页面滚动某个地方，就显示 否则隐藏
    // 点击可以返回顶部
    var goBack = document.querySelector('.goBack')
    var nav = document.querySelector('nav')

    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= nav.offsetTop) {
            goBack.style.display = 'block'
        } else {
            goBack.style.display = 'none'

        }
    })
    goBack.addEventListener('click', function () {
        window.scroll(0, 0)
    })
    // 移动端click延时解决方案
    // 移动端click事件会有300ms的延时，原因是移动端屏幕双击会缩放（double tap to zoom）页面 
    // 1；<meta name = "viwport" content="user-scalable=no"  在视口标签上加一句
    // 禁止缩放 
    // 2；利用touch事件自己封装这个事件解决300ms延迟
    // 原理就是 1；当我们手指触摸品名，记录丧失触摸时间
    // 2；当我们手指离开屏幕，用离开的时候减去触摸的时间
    // 3；如果时间小于150ms，并且没有滑动过屏幕，那么我们就定义为点击
    // function tap(obj, callback) {
    //     var isMove = false
    //     var startTime = 0  //记录触摸时间的时间变量
    //     obj.addEventListener('touchstart',function (e) {
    //         startTime = Date.now() //记录触摸时间

    //     })
    //     obj.addEventListener('touchmove',function (e) {
    //         isMove = true //看看是否滑动，有滑动算拖拽 不算点击

    //     })
    //     obj.addEventListener('touchend',function (e) {
    //         if (isMove && (Date.now() - startTime) < 150) {
    //             callback && callback
    //         }
    //         isMove = false //取反重置
    //         startTime = 0

    //     })

    // }
    // tap(goBack, function () {
    //     window.scroll(0, 0)
    // })
    // 3;使用插件 fastclick插件解决300ms延迟


})
