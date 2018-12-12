$(document).ready(function() {
	var stickyHeaderTop = $(".header").offset().top;
	var stickyHeader = function() {
		var scrollTop = $(window).scrollTop();
		if(scrollTop > stickyHeaderTop){
			$(".header").addClass('sticky');
			$(".header").css('border-bottom', '1.5px solid #5c4089');
			$(".menu").css('visibility', 'visible');
		} else {
			$(".header").removeClass('sticky');
			$(".header").css('border-bottom', 'none');
			$(".menu").css('visibility', 'hidden');
		}
	}
	function parallaxOne(){
		var backgroundHeight = $("#deco1").height();
		var windowScroll = $(window).scrollTop();
		if (windowScroll > backgroundHeight*0.3){
			$("#deco1").css('background-position', '0 -'+windowScroll*0.5+'px');
		}
	}
	function parallaxTwo(){
		var decoTwoPosition = $("#deco2").position();
		var windowScroll = $(window).scrollTop();
		if (windowScroll > decoTwoPosition.top*0.4){
			$("#deco2").css('background-position', '0 -'+windowScroll*0.1+'px');
		}
	}
	function parallaxThree(){
		var decoThreePosition = $("#deco3").position();
		var windowScroll = $(window).scrollTop();
		if (windowScroll > decoThreePosition.top*0.5){
			$("#deco3").css('background-position', '0 -'+windowScroll*0.1+'px');
		}
	}

	function lnbShow(){
		$(".nav-slider").addClass('active');
		setTimeout(function(){
			$(".nav-slider.active").css({
				'height':'2.4rem',
				'box-shadow':'0px 2px 3px 0px rgba(55,29,97,1)'
				});
			}, 300);
		$(".lnb").addClass('active');
	}
	function lnbClose(){
		$(".lnb").removeClass('active');
		$(".nav-slider.active").css({
			'height':'0.4rem',
			'box-shadow':'none'
		});
		setTimeout(function(){
			$(".nav-slider").removeClass('active');
		}, 300);
	}

	$("#first").click(function(e){
		e.stopPropagation;
		if($(".lnb").hasClass('active')){
			lnbClose();
			setTimeout(function(){
				$(".nav-slider").css('margin-left', '7%');
				lnbShow();
			}, 300);
			$("#first-page").siblings().removeClass('active');
			$("#first-page").addClass('active');
		} else {
			$(".nav-slider").css('margin-left', '7%');
			lnbShow();
			$("#first-page").addClass('active');
		}
	});
	$("#second").click(function(e){
		e.stopPropagation;
		if($(".lnb").hasClass('active')){
			lnbClose();
			setTimeout(function(){
				$(".nav-slider").css('margin-left', '31%');
				lnbShow();
			}, 300);
			$("#second-page").siblings().removeClass('active');
			$("#second-page").addClass('active');
		} else {
			$(".nav-slider").css('margin-left', '31%');
			lnbShow();
			$("#second-page").addClass('active');
		}
	});
	$("#third").click(function(e){
		e.stopPropagation;
		if($(".lnb").hasClass('active')){
			lnbClose();
			setTimeout(function(){
				$(".nav-slider").css('margin-left', '53%');
				lnbShow();
			}, 300);
			$("#third-page").siblings().removeClass('active');
			$("#third-page").addClass('active');
		} else {
			$(".nav-slider").css('margin-left', '53%');
			lnbShow();
			$("#third-page").addClass('active');
		}
	});
	$("#fourth").click(function(e){
		e.stopPropagation;
		if($(".lnb").hasClass('active')){
			lnbClose();
			setTimeout(function(){
				$(".nav-slider").css('margin-left', '74%');
				$(".nav-slider").addClass('active');
			}, 300);
			$(".lnb li").removeClass('active');
		} else {
			$(".nav-slider").css('margin-left', '74%');
			$(".nav-slider").addClass('active');
			$(".lnb li").removeClass('active');
		}
	});
	$(document).mouseup(function (e) {
		var container = $(".nav");
		if (!container.is(e.target) && container.has(e.target).length === 0){
			lnbClose()
			$(".lnb").removeClass('active');
			$(".lnb li").removeClass('active');
		}	
	});


	stickyHeader();
	parallaxOne();
	parallaxTwo();
	parallaxThree();
	$(window).scroll(function() {
		stickyHeader();
		parallaxOne();
		parallaxTwo();
		parallaxThree();
	});
});