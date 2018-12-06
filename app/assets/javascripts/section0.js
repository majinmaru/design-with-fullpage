$(document).ready(function() {

	$(".mobile-nav-sns").click(function(e){
		e.stopPropagation();		
		$(".nav-sns-list").toggleClass('active');		
	});
	
});