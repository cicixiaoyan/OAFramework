/**
 * Created by Administrator on 2017/3/6.
 */

function changeFrameHeight(){
    var rfm= document.getElementById("contentiframe");
    contentiframe.height=document.documentElement.clientHeight;
}
window.onresize=function(){
    changeFrameHeight();
};

var navlist = [
    {"icon":"icon-approval","name":"审批","href":"#"},
    {"icon":"icon-people-no","name":"公告","href":"#"},
    {"icon":"icon-clock","name":"考勤","href":"#"},
    {"icon":"icon-task","name":"任务","href":"#"},
    {"icon":"icon-text","name":"工作报告","href":"#"},
    {"icon":"icon-cmr","name":"CRM","href":"#"},
    {"icon":"icon-hr","name":"hr","href":"#","chirldren":[
        {"name":"制度","url":"#"},
        {"name":"学习进度","url":"#"},
        {"name":"员工档案","url":"#"},
        {"name":"薪资","url":"#"},
        {"name":"招聘申请","url":"#"},
        {"name":"招聘计划","url":"#"},
        {"name":"面试登记","url":"#"},
        {"name":"录用管理","url":"#"}
    ]}
];


$(function(){
     $(".nav-list li").on("click",function(){
         var thisUl = $(this).children("ul");
         thisUl.toggleClass("hide","show");
     });
    $(".nav-list li").on("mouseenter",function(){
        var thisUl = $(this).children("ul");
        thisUl.removeClass("hide").addClass("show");
    });

});