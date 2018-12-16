$(document).ready(function() {
	var slider = $(".slider");
	var slides = slider.find(".slide");
	var slideList = slider.find(".slide-list");
	function resetSize(){
		slider.height(slides.find("img").height());
		slides.width(slider.width());
		slideList.width(slides.width()*slides.length);
	}
	resetSize();
});