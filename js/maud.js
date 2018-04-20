$(function () {
    $(".MAfy_li").click(function () {
        $(this).addClass("MAlired").siblings().removeClass("MAlired");
    })
    var k  = 0
    $(".MAfy_zuo").click(function () {
        k--
        if (k < 0) {
            return k=0
        }else{
            $(".MAfy_ul .MAfy_li").eq(k).addClass("MAlired").siblings().removeClass("MAlired");
        } 
    })
    $(".MAfy_you").click(function () {
        k++
        var leg = $(".MAfy_li").length
        if (k > leg) {
            return k=leg
        }else {
            $(".MAfy_ul .MAfy_li").eq(k).addClass("MAlired").siblings().removeClass("MAlired");
        }   
    })
})