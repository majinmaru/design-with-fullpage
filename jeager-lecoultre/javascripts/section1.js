$(document).ready(function() {
    
    $(".history-description p:first").addClass('active');
    $(".timeline li:first").addClass('active');
    $(".history").css('background-image', 'url(images/section1/bg-1833.png)');
    
    var $historyId = $(".history-description p").attr('id');

    $(".timeline li a").click(function() {
        var currentHref = $(this).attr('href');     //ex: #1844
        var currentYear = $(currentHref).attr('id'); //ex: 1844
        
        $(".timeline li").removeClass('active');
        $(this).parent().addClass('active');
        
        $(currentHref).siblings().hide();
        $(currentHref).show();
        $(currentHref).addClass('active');
        
        $(".history").css('background-image', 'url(images/section1/bg-' + currentYear + '.png)');
        $(".history-image").attr('src', 'images/section1/'+ currentYear +'.png');
        return false;
    });
});