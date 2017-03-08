/**
 * Created by Administrator on 2017/3/7.
 */
$("#calender").showCalendar({
    bgColor:"transparent" ,
    topColor:$(".sign-in").css("background-color"),
    arrowColor:"#fff",
    //btnBorder:"none"
    innerBorder:"none",
    ymBgColor:"transparent",
    ymFontColor:"#fff",
    weekBgColor:"transparent",
    thisMonthBgColor:"transparent"

});
$(function(){
    $('#dutyList').css({"height":window.screen.availHeight-$("#dutyList").offset().top+"px","overflow":"auto"});

    $("#calender").trigger("click");
});

