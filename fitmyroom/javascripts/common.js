$(document).ready(function() {
	var slider = $(".slider");
	var slides = slider.find(".slide");
	var slideList = slider.find(".slide-list");
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
	$(".menu").click(function(e){
		e.stopPropagation;
		$(window).scrollTop(0);
	})
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
	function resetSize(){
		slider.height(slides.find("img").height());
		slides.width(slider.width());
		slideList.width(slides.width()*slides.length);
	}
	resetSize();
	stickyHeader();
	$(window).scroll(function() {
		stickyHeader();
	});
});