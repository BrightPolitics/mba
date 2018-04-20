$(function () {
    $(".QApag_num").click(function () {
        $(this).addClass("QApag_numred").siblings().removeClass("QApag_numred");
    })
        var k  = 0
    $(".QApag_left").click(function () {
        k--
        if (k < 0) {
            return k=0
        }else{
            $(".QAquanbu .QApag_num").eq(k).addClass("QApag_numred").siblings().removeClass("QApag_numred");
        } 
    })
    $(".QApag_right").click(function () {
        k++
        var leg = $('.QApag_num').length
        if (k > leg) {
            return k=leg
        }else {
            $(".QAquanbu .QApag_num").eq(k).addClass("QApag_numred").siblings().removeClass("QApag_numred");
        }   
    })
})