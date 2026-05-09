// 闻雨官网脚本
$(function(){
 // 导航滚动效果
 $(window).scroll(function(){
 if($(this).scrollTop() > 50){
 $('.lh-header').css('background', 'rgba(0,0,0,0.95)');
 } else {
 $('.lh-header').css('background', 'transparent');
 }
 });
 
 // 平滑滚动
 $('a[href^="#"]').click(function(e){
 e.preventDefault();
 var target = $(this).attr('href');
 if(target && $(target).length){
 $('html,body').animate({scrollTop: $(target).offset().top}, 500);
 }
 });
 
 // 表单提交
 $('form').submit(function(e){
 e.preventDefault();
 alert('感谢您的留言！我们会尽快与您联系。');
 this.reset();
 });
});