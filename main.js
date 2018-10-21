/*
	Visualize by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

$(function() {

	// Vars.
		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper');

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Disable animations/transitions until everything's loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			$body.removeClass('is-loading');
		});

	// Poptrox.
		$window.on('load', function() {

			$('.thumbnails').poptrox({
				onPopupClose: function() { $body.removeClass('is-covered'); },
				onPopupOpen: function() { $body.addClass('is-covered'); },
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: true,
				overlayColor: '#000000',
				overlayOpacity: 0.75,
				popupLoaderText: '',
				fadeSpeed: 500,
				usePopupDefaultStyling: false,
				windowMargin: (skel.breakpoint('small').active ? 5 : 50)
			});

		});
		// var modal = document.getElementById('myModal');
 
  //       // Get the button that opens the modal
  //       var btn = document.getElementById("myBtn");
 
  //       // Get the <span> element that closes the modal
  //       var span = document.getElementsByClassName("close")[0];                                          
 
  //       // When the user clicks on the button, open the modal 
  //       btn.onclick = function() {
  //           modal.style.display = "block";
  //       }
 
  //       // When the user clicks on <span> (x), close the modal
  //       span.onclick = function() {
  //           modal.style.display = "none";
  //       }
 
  //       // When the user clicks anywhere outside of the modal, close it
  //       window.onclick = function(event) {
  //           if (event.target == modal) {
  //               modal.style.display = "none";
  //           }
  //       }


});