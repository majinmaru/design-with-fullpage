$(document).ready(function() {

	$(".mobile-nav-sns").click(function(e){
		e.stopPropagation();		
		$(".nav-sns-list").toggleClass('active');		
	});	
	$(function(){
		setTimeout(function(){
			$(".intro .clock-flip-btn .click-me").animate({
				opacity: 1
			}, 300);
		}, 6000);
	});
	$(".intro .clock-flip-btn .clock-btn").click(function(e){
		e.stopPropagation;
		if ($(".clock").hasClass('transform')){
			$(".clock").removeClass('transform');
			$(this).css('animation-play-state', 'running');
		} else {
			$(".clock").addClass('transform');
			$(this).css('animation-play-state', 'paused');
		}
	})
});