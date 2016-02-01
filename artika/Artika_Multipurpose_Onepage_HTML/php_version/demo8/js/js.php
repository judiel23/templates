<?php 
header('Content-type: application/javascript');
ob_start("compress");

	function compress($buffer) {
		   		
    	return $buffer;
		
	}

  	/* JS files for compression */
	include('jquery-min.js');
	include('jquery.prettyPhoto.js'); 
	include('jquery.easing.js');
	include('isotope.pkgd.min.js');
	include('owl.carousel.min.js');	
    include('jquery.appear.js');
    include('jquery.countTo.js');  
    include('jquery.countdown.min.js'); 
	include('jquery.mousewheel-3.0.6.pack.js');	
	
    include('scripts.js'); 


ob_end_flush();
?>
