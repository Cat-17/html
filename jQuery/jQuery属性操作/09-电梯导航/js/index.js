$(function() {
    // 当我们点击了小li 此时不需要执行 页面滚动事件里面的 li 的背景选择 添加 current
    // 节流阀  互斥锁
    var flag = true;
    // 1.显示隐藏电梯导航
    var toolTop = $(".recommend").offset().top;
    toggleTool();

    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        };
    }

    $(window).scroll(function() {
        toggleTool();
        // 3. 页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名


        if (flag) {
            $(".floor .w").each(function(i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    console.log(i);
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();

                }
            })
        }



    });
    // 2. 点击电梯导航页面可以滚动到相应内容区域
    $(".fixedtool li").click(function() {
        flag = false;
        console.log($(this).index());
        // 当我们每次点击小li 就需要计算出页面要去往的位置
        // 选出对应索引号的内容区的盒子 计算它的.offset().top
        var current = $(".floor .w").eq($(this).index()).offset().top;
        // 页面动画滚动效果
        $("body, html").stop().animate({
            scrollTop: current
        }, function() {
            flag = true;
        });
        // 点击之后，让当前的小li 添加current 类名 ，姐妹移除current类名
        $(this).addClass("current").siblings().removeClass();
    })
})


//


// $(function () {
//     // 当我们点击li 此时不需要执行 页面滚动事件里面li 的背景选中添加current
//     // 节流阀 互斥锁
//     var flag = true
//     // 1；显示隐藏电梯导航 
//     var toolTop = $(".recommend").offset().top
//     toggleTool()
//     // 1;当我们滚动到今日推荐模块 就让电梯导航显示出来
//     function toggleTool() { 

//         if ($(document).scrollTop() >= toolTop) {
//             $(".fixedtool").fadeIn()
//         } else {
//             $(".fixedtool").fadeOut()
//         }
//     }
//     $(window).scroll(function () {
//         toggleTool()
//         // 3;页面滚动到某个区域，左侧电梯导航li想要添加和删除current类
//         if (flag) {
//             $(".floor .w").each(function (i ,ele) {
//                 if ($(document).scrollTop() >= $(ele).offset().top) {
//                     // console.log(i);
//                     $(".fixedtool li").eq(i).addClass("current").siblings().removeClass("current")
//                 }
//             })
//       }
//         // $(".floor .w").each(function (i, ele) {
//         //     if ($(document).scrollTop() >= $(ele).offset().top) {
//         //         $(".fixedtool li").eq(i).addClass("current").siblings().removeClass("current")
                
//         //     }
            
//         // })
//     })
//     // 2；点击电梯导航页面可以滚动想要的内容区域
//     // $(".fixedtool li").click(function () {
//     //     // 点击拿到当前li的索引号
//     //     // console.log($(this).index());
//     //     // 当我们每次点击li就需要计算页面要去往的位置
//     //     // 选出对应索引号的内容区的盒子，计算他的offset().top
//     //     var current = $(".floor .w").eq($(this).index).offset().top
//     //     // 页面动画滚动效果
//     //     $("body ,html").stop().animate({
//     //         scrollTop:current
//     //     })

//     // })
//     $(".fixedtool li").click(function () {
//         flag = false
//         var current = $(".floor .w").eq($(this).index()).offset().top
//         // 页面添加动画效果
//         $("body , html").stop().animate({
//             scrollTop:current
//         })

//         // 点击之后，让当前li 添加current类名 兄弟移除类
//         $(this).addClass("current").siblings().removeClass("current")


//     })
// })

