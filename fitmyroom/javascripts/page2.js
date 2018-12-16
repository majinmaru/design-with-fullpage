$(document).ready(function() {
	var windowSize = $(window).width();
	if(windowSize >= 1024){
		$(".slide").find("img").attr('src', 'images/PC/page2/pc-jumbo-2.png');
		$(".slider").height('21.8rem');
	}
});