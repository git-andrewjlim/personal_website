$(document).ready(function() {
	$("#menu-items article").click(function(){
		window.location = $(this).find("a").attr("href");
		return false;
	}); 
});