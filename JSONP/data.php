<?php
// echo  "var str = 'haha"
// echo "foo('123')"
$cityName = $_GET("callback")
$city = $_GET["city"]
if(&city == "beijing"){
    echo $cityName."('北京的天气晴')"
} else {
    echo $cityName."('没有查询到天气信息')"
}
?>