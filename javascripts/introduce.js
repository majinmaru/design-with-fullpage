$(document).ready(function(){
	var accentFront = $("<span class='accent front'></span>");
	var accentBack = $("<span class='accent back'></span>");
	$(".design").first().addClass('active');
	$(".design").first().prepend(accentFront);
	$(".design").first().append(accentBack);
	$(".ability").hide();
	$(".ability").first().show();

	$(".design").click(function(e){
		e.stopPropagation();
		var $getIndex = $(this).index();
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$(this).removeClass(accentFront, accentBack);
		$(this).prepend(accentFront);
		$(this).append(accentBack);
		$(".ability").hide();
		$(".ability").eq($getIndex).show();
	});
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		var scrollUp = scroll*1.4;
		$(".section-two").css({
			transform: "translateY(-"+scrollUp+"px)"
		});

	});
});