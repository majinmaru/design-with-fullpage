$(document).ready(function(){
	$(".box").mouseenter(function(){
		$(this).children(".box-content").show().animate({
			marginTop: "0",
			opacity: 1
		}, 200);
	})
	$(".box").mouseleave(function(){
		$(this).children(".box-content").animate({
			marginTop: "-10px",
			opacity: 0
		}, 200).hide();
	})
});