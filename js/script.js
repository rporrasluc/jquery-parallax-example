$(document).ready(function() {
	$('section[data-type="background"]').each(function() {
		var $bgobj = $(this); // Asigno el objeto
		$(window).scroll(function() {
			var yPos = -($(window).scrollTop() / $bgobj.data('speed'))
			// Put together our final background position
			var coords = '50% '+ yPos + 'px';
			$bgobj.css({ backgroundPosition: coords });
		})
	})
})