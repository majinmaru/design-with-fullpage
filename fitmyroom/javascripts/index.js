$(document).ready(function() {	
	var slider = $(".slider");
	var slides = slider.find(".slide");
	var slideList = slider.find(".slide-list");
	var sliderNav = slider.find(".slider-nav");
	var sliderArrow = slider.find(".slider-arrow");
	var nextSlideIndex;
	var autorun;
	var sliderDuration = 300;
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
		slider.height(slides.height());
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
	function sliderNavDots(){
		slides.each(function(){
			var dot = $("<li>", {
				attr: {
					class: "nav-dots"
				}
			})
			sliderNav.append(dot);
		})
	}	

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
	sliderNavDots();
	autorunSlider();
	runSlider();
		
	parallaxOne();
	parallaxTwo();
	parallaxThree();
	$(window).scroll(function() {		
		parallaxOne();
		parallaxTwo();
		parallaxThree();
	});
});