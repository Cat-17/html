// window.addEventListener('load', function() {
//     var preview_img = document.querySelector('.preview_img');
//     var mask = document.querySelector('.mask');
//     var big = document.querySelector('.big');
//     // 1. 当我们鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
//     preview_img.addEventListener('mouseover', function() {
//         mask.style.display = 'block';
//         big.style.display = 'block';
//     })
//     preview_img.addEventListener('mouseout', function() {
//             mask.style.display = 'none';
//             big.style.display = 'none';
//         })
//         // 2. 鼠标移动的时候，让黄色的盒子跟着鼠标来走
//     preview_img.addEventListener('mousemove', function(e) {
//         // (1). 先计算出鼠标在盒子内的坐标
//         var x = e.pageX - this.offsetLeft;
//         var y = e.pageY - this.offsetTop;
//         // console.log(x, y);
//         // (2) 减去盒子高度 300的一半 是 150 就是我们mask 的最终 left 和top值了
//         // (3) 我们mask 移动的距离
//         var maskX = x - mask.offsetWidth / 2;
//         var maskY = y - mask.offsetHeight / 2;
//         // (4) 如果x 坐标小于了0 就让他停在0 的位置
//         // 遮挡层的最大移动距离
//         var maskMax = preview_img.offsetWidth - mask.offsetWidth;
//         if (maskX <= 0) {
//             maskX = 0;
//         } else if (maskX >= maskMax) {
//             maskX = maskMax;
//         }
//         if (maskY <= 0) {
//             maskY = 0;
//         } else if (maskY >= maskMax) {
//             maskY = maskMax;
//         }
//         mask.style.left = maskX + 'px';
//         mask.style.top = maskY + 'px';
//         // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
//         // 大图
//         var bigIMg = document.querySelector('.bigImg');
//         // 大图片最大移动距离
//         var bigMax = bigIMg.offsetWidth - big.offsetWidth;
//         // 大图片的移动距离 X Y
//         var bigX = maskX * bigMax / maskMax;
//         var bigY = maskY * bigMax / maskMax;
//         bigIMg.style.left = -bigX + 'px';
//         bigIMg.style.top = -bigY + 'px';

//     })

// })


// 鼠标经过小图片盒子 ，黄色的遮挡层和大图片显示，离开隐藏2个盒子功能
// load  窗口加载事件 等所有的元素加载完才会触发的事件
window.addEventListener('load', function () {
    // 获取元素
    var mask = document.querySelector('.mask')
    var big = document.querySelector('.big')
    var preview_img = document.querySelector('.preview_img')
    var bigImg = document.querySelector('.bigImg')

    preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block'
        big.style.display = 'block'

    })
    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none'
        big.style.display = 'none'

    })
    // 2.鼠标移动的时候，让黄色的盒子跟着鼠标来走
    preview_img.addEventListener('mousemove', function (e) {
        // 先计算出鼠标在盒子内的坐标
        var x = e.pageX - preview_img.offsetLeft
        var y = e.pageY - preview_img.offsetTop
        //（2）减去盒子高度的300的一半是150 就是我们mask最终的left top 值了
        // （3）我们mask 移动的距离
        var maskX = x - mask.offsetWidth / 2
        var maskY = x - mask.offsetWidth / 2
        // (4)判断 如果x坐标小于0 就让他停在0
        var maskMax =  preview_img.offsetWidth - mask.offsetWidth
        if (maskX <= 0) {
            maskX = 0
        } else if (maskX >= maskMax) {
            maskX =maskMax
        } if (maskY <= 0) { 
            maskY = 0
        } else if (maskY >= maskMax) {
            maskY =  maskMax
        }
            mask.style.left = maskX + 'px'
        mask.style.top = maskY + 'px'
        // 大图片的移动距离 = 遮挡层移动距离/大图片最大移动距离/遮挡层的最大移动距离
        // 大图片最大移动距离
        var bigMax = bigImg.offsetWidth - big.offsetWidth
        // 大图片的移动距离 x y
        var bigX = maskX * bigMax / maskMax
        var bigY = maskY * bigMax / maskMax
        bigImg.style.left = -bigX + 'px'
        bigImg.style.top = -bigY + 'px'

    })




})