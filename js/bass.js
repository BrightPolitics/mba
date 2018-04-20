$(function(){
    $(".colse").click(function(){
        $(".close_box").slideUp( );
    });
    $(".item").click(function(){
        var i = $(this).index(".item")
        $('.eq .tjul').eq(i).show().siblings('.eq .tjul').hide()
    });
}) 
