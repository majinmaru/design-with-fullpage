$(document).ready(function() {
	var windowSize = $(window).width();
	if(windowSize >= 1024){
		$(".slide").find("img").attr('src', 'images/PC/page1/pc-jumbo-1.png');
		$(".slider").height('21.8rem');
	}
});