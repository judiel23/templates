<?php 
header('Content-type: text/css');
ob_start("compress");

	function compress($buffer) {
		/* remove comments */
    	$buffer = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $buffer);
    		
    	/* remove tabs, spaces, newlines, etc. */
    	$buffer = str_replace(array("\r\n", "\r", "\n", "\t", '  ', '    ', '    '), '', $buffer);
    		
    	return $buffer;
	}

  	/* css files for compression */
	
	include('reset.css');
	include('demo-fonts.css');
	include('style.css');
	include('animate.css');
	include('framework.css');
	include('grid.css');
	include('responsive.css');
	include('icons.css');
	include('owl.carousel.css');
	include('jquery.fancybox.css');
	include($_GET['skin']);
	

ob_end_flush();
?>
