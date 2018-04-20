$(function () {
    $(".APar_span").click(function () {
        var i = $(this).index(".APar_span")
        $(".APar_span").eq(i).addClass("APar_fanyered").siblings().removeClass("APar_fanyered");
    })
    
})