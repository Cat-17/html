// window.addEventListener('load', function() {
//     // 1. 获取元素
//     var arrow_l = document.querySelector('.arrow-l');
//     var arrow_r = document.querySelector('.arrow-r');
//     var focus = document.querySelector('.focus');
//     var focusWidth = focus.offsetWidth;
//     // 2. 鼠标经过focus 就显示隐藏左右按钮
//     focus.addEventListener('mouseenter', function() {
//         arrow_l.style.display = 'block';
//         arrow_r.style.display = 'block';
//         clearInterval(timer);
//         timer = null; // 清除定时器变量
//     });
//     focus.addEventListener('mouseleave', function() {
//         arrow_l.style.display = 'none';
//         arrow_r.style.display = 'none';
//         timer = setInterval(function() {
//             //手动调用点击事件
//             arrow_r.click();
//         }, 2000);
//     });
//     // 3. 动态生成小圆圈  有几张图片，我就生成几个小圆圈
//     var ul = focus.querySelector('ul');
//     var ol = focus.querySelector('.circle');
//     // console.log(ul.children.length);
//     for (var i = 0; i < ul.children.length; i++) {
//         // 创建一个小li
//         var li = document.createElement('li');
//         // 记录当前小圆圈的索引号 通过自定义属性来做
//         li.setAttribute('index', i);
//         // 把小li插入到ol 里面
//         ol.appendChild(li);
//         // 4. 小圆圈的排他思想 我们可以直接在生成小圆圈的同时直接绑定点击事件
//         li.addEventListener('click', function() {
//             // 干掉所有人 把所有的小li 清除 current 类名
//             for (var i = 0; i < ol.children.length; i++) {
//                 ol.children[i].className = '';
//             }
//             // 留下我自己  当前的小li 设置current 类名
//             this.className = 'current';
//             // 5. 点击小圆圈，移动图片 当然移动的是 ul
//             // ul 的移动距离 小圆圈的索引号 乘以 图片的宽度 注意是负值
//             // 当我们点击了某个小li 就拿到当前小li 的索引号
//             var index = this.getAttribute('index');
//             // 当我们点击了某个小li 就要把这个li 的索引号给 num
//             num = index;
//             // 当我们点击了某个小li 就要把这个li 的索引号给 circle
//             circle = index;
//             // num = circle = index;
//             console.log(focusWidth);
//             console.log(index);

//             animate(ul, -index * focusWidth);
//         })
//     }
//     // 把ol里面的第一个小li设置类名为 current
//     ol.children[0].className = 'current';
//     // 6. 克隆第一张图片(li)放到ul 最后面
//     var first = ul.children[0].cloneNode(true);
//     ul.appendChild(first);
//     // 7. 点击右侧按钮， 图片滚动一张
//     var num = 0;
//     // circle 控制小圆圈的播放
//     var circle = 0;
//     // flag 节流阀
//     var flag = true;
//     arrow_r.addEventListener('click', function() {
//         if (flag) {
//             flag = false; // 关闭节流阀
//             // 如果走到了最后复制的一张图片，此时 我们的ul 要快速复原 left 改为 0
//             if (num == ul.children.length - 1) {
//                 ul.style.left = 0;
//                 num = 0;
//             }
//             num++;
//             animate(ul, -num * focusWidth, function() {
//                 flag = true; // 打开节流阀
//             });
//             // 8. 点击右侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
//             circle++;
//             // 如果circle == 4 说明走到最后我们克隆的这张图片了 我们就复原
//             if (circle == ol.children.length) {
//                 circle = 0;
//             }
//             // 调用函数
//             circleChange();
//         }
//     });

//     // 9. 左侧按钮做法
//     arrow_l.addEventListener('click', function() {
//         if (flag) {
//             flag = false;
//             if (num == 0) {
//                 num = ul.children.length - 1;
//                 ul.style.left = -num * focusWidth + 'px';

//             }
//             num--;
//             animate(ul, -num * focusWidth, function() {
//                 flag = true;
//             });
//             // 点击左侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
//             circle--;
//             // 如果circle < 0  说明第一张图片，则小圆圈要改为第4个小圆圈（3）
//             // if (circle < 0) {
//             //     circle = ol.children.length - 1;
//             // }
//             circle = circle < 0 ? ol.children.length - 1 : circle;
//             // 调用函数
//             circleChange();
//         }
//     });

//     function circleChange() {
//         // 先清除其余小圆圈的current类名
//         for (var i = 0; i < ol.children.length; i++) {
//             ol.children[i].className = '';
//         }
//         // 留下当前的小圆圈的current类名
//         ol.children[circle].className = 'current';
//     }
//     // 10. 自动播放轮播图
//     var timer = setInterval(function() {
//         //手动调用点击事件
//         arrow_r.click();
//     }, 2000);

// })

window.addEventListener('load', function () {
    // 1;获取元素
    var focus = document.querySelector('.focus')
    var arrow_l = document.querySelector('.arrow-l')
    var arrow_r = document.querySelector('.arrow-r')
    var focuswidth = focus.offsetWidth
    //console.log(focuswidth) 得到ul的宽度
    // 2；鼠标经过轮播图模块，左右按钮显示，离开隐藏左右按钮
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block'
        arrow_r.style.display = 'block'
        // 鼠标经过清除定时器
        clearInterval(timer)
        timer = null  //清除定时器变量
    })
    // （2.1） 鼠标离开 隐藏
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none'
        arrow_r.style.display = 'none'
        timer = setInterval(function () {
            arrow_r.click()
        }, 2000)

    })
    // 动态生成小圆圈 有几张图片，我就生成几个小圆圈
    // ul结构很多，这里必须加限定 ul的父级是谁 指定
    var ul = focus.querySelector('ul')
    var ol = focus.querySelector('.circle')
    // console.log( ul.children.length) 得到图片的个数
    for (var i = 0; i < ul.children.length; i++) {
        // 创建一个li
        var li = document.createElement('li')
        // 记录当时小圆圈的索引号,通过自定义setAttribute创建属性来做
        li.setAttribute('index', i)
        // 把小li插入到ol当中
        ol.appendChild(li)
        // 4;小圆圈的排他思想 我们可以直接在生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click', function () {
            // 干掉所有人利用循环拿到所有的li 清除 current 类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = ''
            }
            //留下我自己 点击了谁 谁就得到 current 类名
            this.className = 'current'
            // 使用动画函数的前提 改元素必须要有定位
            // 注意是ul移动而不是li
            // 滚动图片的核心算法：点击某个小圆圈，就让图片滚动。
            // 小圆圈的索引号乘以图片的宽度，作为ul移动距离 往左走 是负值
            // 当我们点击了某个li 就拿到当前grtAttributeli的索引号
            var index = this.getAttribute('index')
            // 当我们点击了某个li 就要吧这个li的索引号给num
            num = index
            // console.log(index)
            // 当我们点击了某个li 就要吧这个li的索引号给circle
            circle = index



            animate(ul, -index * focuswidth)

        })
    }
    // 把ol里面的第一个里添加类 current
    ol.children[0].className = 'current'
    // 6:克隆第一张图片放到ul的最后面 深克隆 包含里面子节点
    var first = ul.children[0].cloneNode(true)
    ul.appendChild(first)

    // 7;点击右侧按钮，图片滚动一张
    var num = 0
    // circle 控制小圆圈的播放
    var circle = 0
    //  var flag = true 节流阀
    var flag = true
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false //关闭节流阀
            // 如果走到最后复制的一张图片 此时我们的ul要快速复原 left = 0
            if (num === ul.children.length - 1) {
                ul.style.left = 0
                num = 0
            }
            num++
            // 调用动画
            animate(ul, -num * focuswidth, function () {
                flag = true 

            })
            // 图片无缝滚动原理
            // 把ul第一个li复制一份 放到ul的最后面
            // 当图片滚动到克隆的最后一张图片是，让ul快递的，不做动画的跳到最左侧：left为0
            // 8；点击右侧按钮，小圆圈跟随着一起变化，可以在声明一个变量控制小圆圈的播放
            circle++
            // 如果circle等于4的时候，就说明我们走到了克隆的最后一张图片
            // 这时候要复原
            if (circle == ol.children.length) {
                circle = 0
            }
            //调用函数
            circleChange()

        }
    })


    // 左侧按钮
    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false
            // 如果走到最后复制的一张图片 此时我们的ul要快速复原 left = 0
        if (num == 0) {

            num = ul.children.length - 1
            ul.style.left = -num * focuswidth + 'px'

        }
        num--
        // 调用动画
            animate(ul, -num * focuswidth, function () {
            flag = true

           
        })
        // 图片无缝滚动原理
        // 把ul第一个li复制一份 放到ul的最后面
        // 当图片滚动到克隆的最后一张图片是，让ul快递的，不做动画的跳到最左侧：left为0
        // 8；点击右侧按钮，小圆圈跟随着一起变化，可以在声明一个变量控制小圆圈的播放
        circle--

        // if (circle < 0) {
        //     circle = ol.children.length -1
        // }
        circle = circle < 0 ? ol.children.length - 1 : circle
        // 调用函数
        circleChange()
        }


    })
    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = ''

        }
        ol.children[circle].className = 'current'
    }


    //自动播放轮播图
    // 实际就类似于点击右侧按钮
    // 此时我们使用手动调用右侧按钮点击事件
    var timer = setInterval(function () {
        arrow_r.click()
    }, 2000)




})
