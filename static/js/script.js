$(document).ready(function() {  
//page transitions
	$("#left_panel").css("display", "none");
	$("#left_panel").fadeIn(800);
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("#left_panel").fadeOut(50, redirectPage);
	});

	function redirectPage() {
		window.location = linkLocation;
	}


// sticky nav
	var stickyNavTop = $('.navbar').offset().top;  
  
	var stickyNav = function(){  
	var scrollTop = $(window).scrollTop();  
       
	if (scrollTop > stickyNavTop) {   
    	$('.navbar').addClass('sticky');
    	$('.showTopNav').show();
	} else {  
    	$('.navbar').removeClass('sticky'); 
    	$('.showTopNav').removeClass('hidden').hide();  
	}  
};  
  
stickyNav();  
  
$(window).scroll(function() {  
    stickyNav();  
});


// scroll to top
$('.scrollUp').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 300);
        return false;
    });


});  