$(function(){
    //设定变量当计数器
          var k = 0;
          var timer = null;
          // 鼠标移上 nav导航 然后 让对应的list里面的li 加上样式 让其他的去掉样式
          $("#nav li").mouseover(function(){
            k = $(this).index();
            console.log(k)
            fn();
          });
          
          timer = setInterval(auto,10000)
          function auto(){
            k++;
            if(k> $("#nav li").length-1) k= 0; 
            fn();
          }
          // 封装了一个核心函数
          function fn() {
            $("#nav li").eq(k).addClass("active").siblings().removeClass("active");
    $("#nav span").eq(k).addClass("show").siblings().removeClass("show").addClass("hidden");
            $("#list li").eq(k).fadeIn(500).siblings().fadeOut(500);
          }
          
          // 移到盒子身上 让定时器停止
          $("#box").mouseover(function(){
            clearInterval(timer);
          })
          //离开盒子以后 继续走 
          $("#box").mouseout(function(){
            timer = setInterval(auto,10000);
    })
})