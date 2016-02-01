jQuery(function($){
	
	$(document).ready(function() {
		
		$(document).scrollTop(0);
		
		// SCROLL TO SECTIONS
		$('*[data-scrollto]').click(function(event){
			
			event.preventDefault();
			var dest = $(this).data('scrollto');				
			var pixels = $(dest).offset().top - 130;			
			var ms = Math.round(1000 + pixels/5);
			
			$('html, body').stop();
			
			$('html, body').animate({				
				scrollTop: pixels
			}, ms, 'easeOutQuint');
			 
		}); 
	
	}); 
}); 