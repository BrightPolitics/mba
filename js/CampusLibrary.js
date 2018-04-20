$(function () {
    $('.nav_diqu').click(function(){
        var i = $(this).index(".nav_diqu")
        if($(".nav_diqu .nav_display").eq(i).css("display")=="none"){
            $(".nav_diqu .nav_display").eq(i).show();
        }else{
            $(".nav_diqu .nav_display").eq(i).hide();
        }    
    })
    $(".topnav_bottomli").click(function showDiv(event){
        $(this).children().show();
        $(this).siblings('.topnav_bottomli').children().hide();

        $(this).addClass("red");
        $(this).siblings('.topnav_bottomli').removeClass("red");
   });
   $(".topnavli").click(function (){
        var i = $(this).index(".topnavli")

        $(".topnav_bottomul").eq(i).show().siblings().hide()
        
        $(".topnavli").eq(i).addClass("topnavlired").siblings().removeClass("topnavlired");
       
        $(".topnav_bottomli").removeClass("red").children().hide();;
   })
   $(".Sbk_span").click(function showDiv(event){
        var i = $(this).index(".Sbk_span")
        $('.Sbk_tab').eq(i).show()
        $('.Sbk_tab .Sbk_tabul').eq(i).show().siblings('.Sbk_tab .Sbk_tabul').hide()

        $(this).addClass("Sbk_red");
        $(this).siblings('.Sbk_span').removeClass("Sbk_red");
    });
})