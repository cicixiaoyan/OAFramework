/**
 * Created by Administrator on 2017/3/6.
 */

var navlist = [
    {"name":"审批","href":"#"},
    {"name":"公告","href":"#"},
    {"cname":"考勤","href":"#"},
    {"name":"任务","href":"#"},
    {"iname":"工作报告","href":"#"},
    {"name":"CRM","href":"#"},
    {"name":"hr","href":"#","chirldren":[
        {"name":"制度","hash":"#"},
        {"name":"学习进度","hash":"#"},
        {"name":"员工档案","hash":"#"},
        {"name":"薪资","hash":"#"},
        {"name":"招聘申请","hash":"#"},
        {"name":"招聘计划","hash":"#"},
        {"name":"面试登记","hash":"#"},
        {"name":"录用管理","hash":"#"}
    ]}
];

function setIframeHeight(iframe) {
    if (iframe) {
            iframe.style.height = window.screen.availHeight+'px';
    }
}

$(function(){
    //$(".main").height($(window).height());

    setIframeHeight(document.getElementById('contentiframe'));

    $(".nav-list >li").on("click",function(){
         var thisUl = $(this).children("ul");
         thisUl.toggleClass("show");
        if(thisUl.hasClass("show")){
            $(this).children('.icon').removeClass("icon-right").addClass("icon-down");
        }else{
            $(this).children('.icon').removeClass("icon-down").addClass("icon-right");
        }
        if($("#aid").attr("data-href")){
            window.contentiframe.location.href = $(this).attr('data-href');
        }

    });

    $(".nav-list >li li").on("click",function(e){
        e.stopPropagation();
        e.preventDefault();
        if($("#aid").attr("data-href")){
            window.contentiframe.location.href = $(this).attr('data-href');
        }
    });

});