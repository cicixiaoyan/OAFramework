/**
 * Created by Administrator on 2017/3/7.
 */

var list= [
    {id:1,title:"调休制度1",time:"2016年11月22日",content:"为了创建一支以公司利益职高无上准则，建立高素质、高水平的团队，更好地服务每一位客户，公司制定以下严格的管理制度，望各位员工自觉遵守</p><p>为了创建一支以公司利益职高无上准则，建立高素质、高水平的团队，更好地服务每一位客户，公司制定以下严格的管理制度，望各位员工自觉遵守"},
    {id:2,title:"调休制度2",time:"2016年11月22日",content:"为了创建一支以公司利益职高无上准则，建立高素质、高水平的团队，更好地服务每一位客户，公司制定以下严格的管理制度，望各位员工自觉遵守</p><p>为了创建一支以公司利益职高无上准则，建立高素质、高水平的团队，更好地服务每一位客户，公司制定以下严格的管理制度，望各位员工自觉遵守"},
    {id:3,title:"调休制度3",time:"2016年11月22日",content:"为了创建一支以公司利益职高无上准则，建立高素质、高水平的团队，更好地服务每一位客户，公司制定以下严格的管理制度，望各位员工自觉遵守</p><p>为了创建一支以公司利益职高无上准则，建立高素质、高水平的团队，更好地服务每一位客户，公司制定以下严格的管理制度，望各位员工自觉遵守"},
    {id:4,title:"调休制度3",time:"2016年11月22日",content:"为了创建一支以公司利益职高无上准则，建立高素质、高水平的团队，更好地服务每一位客户，公司制定以下严格的管理制度，望各位员工自觉遵守</p><p>为了创建一支以公司利益职高无上准则，建立高素质、高水平的团队，更好地服务每一位客户，公司制定以下严格的管理制度，望各位员工自觉遵守"},
    {id:5,title:"调休制度3",time:"2016年11月22日",content:"为了创建一支以公司利益职高无上准则，建立高素质、高水平的团队，更好地服务每一位客户，公司制定以下严格的管理制度，望各位员工自觉遵守</p><p>为了创建一支以公司利益职高无上准则，建立高素质、高水平的团队，更好地服务每一位客户，公司制定以下严格的管理制度，望各位员工自觉遵守"},
    {id:6,title:"调休制度3",time:"2016年11月22日",content:"为了创建一支以公司利益职高无上准则，建立高素质、高水平的团队，更好地服务每一位客户，公司制定以下严格的管理制度，望各位员工自觉遵守</p><p>为了创建一支以公司利益职高无上准则，建立高素质、高水平的团队，更好地服务每一位客户，公司制定以下严格的管理制度，望各位员工自觉遵守"},
    {id:7,title:"调休制度3",time:"2016年11月22日",content:"为了创建一支以公司利益职高无上准则，建立高素质、高水平的团队，更好地服务每一位客户，公司制定以下严格的管理制度，望各位员工自觉遵守</p><p>为了创建一支以公司利益职高无上准则，建立高素质、高水平的团队，更好地服务每一位客户，公司制定以下严格的管理制度，望各位员工自觉遵守"}
] ;
var getlist = function(){
    var listHtml = '';
    $.each(list,function(index,obj){
        listHtml+=
            '<div class="content-list" data-id="'+index+'">'+
                '<div class="content-item">'+
                    '<div>'+obj.title+
                    '<span class="right">'+obj.time+'</span>'+
                    '</div>'+obj.content+
                '</div>'+
            '</div>';
    });
    $('#content-list').append(listHtml);
};


$(function(){
    getlist();

    $('#detailTitle').html(list[0].title);
    $('#detailContent').html(list[0].content);

    $(".detail-box").css({"width":document.body.clientWidth-570-15,"height":document.body.clientHeight});
    $('.content-list').on("click",function(){
        $('.content-list').removeClass("select");
        $(this).addClass('select');
        var top = $(this).offset().top;
        $(".scroll-bar").scrollTop(top-$(this).height());
        var id= $(this).attr('data-id');
        var index = $(this).index();
        $('#detailTitle').text(list[index].title);
        $('#detailContent').html(list[index].content);
    });
});