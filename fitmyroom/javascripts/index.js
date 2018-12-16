$(document).ready(function() {	
	var slider = $(".slider");
	var slides = slider.find(".slide");
	var slideList = slider.find(".slide-list");
	var sliderNav = slider.find(".slider-nav");
	var sliderArrow = slider.find(".slider-arrow");
	var nextSlideIndex;
	var autorun;
	var sliderDuration = 300;
	/////////////////////////////////////////////////////////////여기부터
	var stickyHeaderTop = $(".header").offset().top;
	var stickyHeader = function() {
		var scrollTop = $(window).scrollTop();
		if(scrollTop > stickyHeaderTop){
			$(".header").addClass('sticky');
			$(".header").css('border-bottom', '1.5px solid #5c4089');
			$(".menu").css('visibility', 'visible');
			$(".menu-deco").css('visibility', 'visible');
		} else {
			$(".header").removeClass('sticky');
			$(".header").css('border-bottom', 'none');
			$(".menu").css('visibility', 'hidden');
			$(".menu-deco").css('visibility', 'hidden');
		}
	}
	function lnbShow(){
		$(".nav-slider").addClass('active');
		setTimeout(function(){
			$(".nav-slider.active").css({
				'height':'2.4rem',
				'box-shadow':'0px 2px 3px 0px rgba(55,29,97,1)'
				});
			$(".nav-slider-arrow").addClass('animate');
			}, 300);
		$(".lnb").addClass('active');
		$(".nav-slider-arrow").addClass('active');
	}
	function lnbClose(){
		$(".lnb").removeClass('active');
		$(".nav-slider-arrow").removeClass('animate').removeClass('active');
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
			$(".nav-slider-arrow").addClass('active');
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
			$(".nav-slider-arrow").addClass('active');
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
			$(".nav-slider-arrow").addClass('active');
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
	$(".search-icon").click(function(e){
		e.stopPropagation;
		$(".search-area").toggleClass('active');
		$(".close-search").click(function(e){
			e.stopPropagation;
			$(".search-area").removeClass('active');
		})
	});
	stickyHeader();
	$(window).scroll(function() {
		stickyHeader();
	});
	///////////////////////////////////////////////////////////////////////////여기까지
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
	function resetSize(){
		slider.height(slides.find("img").height());
		slides.width(slider.width());
		slideList.width(slides.width()*slides.length);
	}
	resetSize();
	function runSlider(){
		if(slides.hasClass('active')){
			slideList.animate({
				"left" : -$(".slide.active").index() * 100 + "%"
			}, sliderDuration);
		}
	}
	runSlider();
	sliderArrow.click(function(e){
		e.stopPropagation;
		if($(this).hasClass('left')){
			if($(".slide.active").prev().is(":first")){
				$(".slide.active").prev().addClass('active').siblings().removeClass('active');
				slideList.animate({
					"left":-slides.width() * (slides.length - 1)
				});
                slides.last().addClass('active').siblings().removeClass('active');
			} else {
				$(".slide.active").prev().addClass('active').siblings().removeClass('active');
			}
		}
		if($(this).hasClass('right')){
			if($(".slide.active").next().is(":last")){
				$(".slide.active").next().addClass('active').siblings().removeClass('active');
				slideList.animate({
					"left": 0
				}, 300);
				slides.first().addClass('active').siblings().removeClass('active');
			} else {
				$(".slide.active").next().addClass('active').siblings().removeClass('active');
			}
		}
		runSlider();
	})
	
	function autorunSlider(){
		 if ($("body").css('direction') === 'ltr') {
            autoRun = setInterval(function() {
                sliderArrow.last().click();
            }, 4000);
        } else if ($("body").css('direction') === 'rtl') {
            autoRun = setInterval(function() {
                sliderArrow.first().click();
            }, 4000);
        }
	}
	autorunSlider();	
	parallaxOne();
	parallaxTwo();
	parallaxThree();
	//////////////////////////////////////////////////////////여기부터
	$(".menu").click(function(e){
		e.stopPropagation;
		$(window).scrollTop(0);
		parallaxOne();
		parallaxTwo();
		parallaxThree();
	});
	//////////////////////////////////////////////////////////여기까지
	$(window).scroll(function() {		
		parallaxOne();
		parallaxTwo();
		parallaxThree();
	});
});