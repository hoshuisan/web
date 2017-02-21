/**
 * Created by Administrator on 2016/8/31.
 */
$(document).ready(function () {
   $(".pg").bind("click",function () {
       $(".pg").parents("span").addClass("clickon");
       $(".wg").parents("span").removeClass("clickon");
       $(".phonegame").css("display","block");
       $(".webgame").css("display","none");
   })
    $(".wg").bind("click",function () {
        $(".wg").parents("span").addClass("clickon");
        $(".pg").parents("span").removeClass("clickon");
        $(".webgame").css("display","block");
        $(".phonegame").css("display","none");
    })
    $(".gamenews").bind("click",function () {
        $(".gamenews").parents("span").addClass("clickon");
        $(".cnews").parents("span").removeClass("clickon");
        $(".gamenews-info").css("display","block");
        $(".cnews-info").css("display","none");
    })
    $(".cnews").bind("click",function () {
        $(".cnews").parents("span").addClass("clickon");
        $(".gamenews").parents("span").removeClass("clickon");
        $(".cnews-info").css("display","block");
        $(".gamenews-info").css("display","none");
    })
    $(".gift").bind("click",function () {
        $(".gift").parents("span").addClass("clickon");
        $(".product").parents("span").removeClass("clickon");
        $(".product-info").css("display","none");
        $(".more1").css("display","block");
        $(".tmall").css("display","none");
    })
    $(".product").bind("click",function () {
        $(".product").parents("span").addClass("clickon");
        $(".gift").parents("span").removeClass("clickon");
        $(".product-info").css("display","block");
        $(".more1").css("display","none");
        $(".tmall").css("display","inline");
    })
});