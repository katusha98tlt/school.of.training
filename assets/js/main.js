/*
	Retrospect by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel
		.breakpoints({
			xlarge: '(max-width: 1680px)',
			large: '(max-width: 1280px)',
			medium: '(max-width: 980px)',
			small: '(max-width: 736px)',
			xsmall: '(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Nav.
			$('#nav')
				.append('<a href="#nav" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right'
				});

	});

	// Change to your service ID, or keep using the default service
	var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";
  var template_id = "template_I5bQPdXl";

  myform.find("button").text("Отпавляется...");
  emailjs.sendForm(service_id,template_id,"myform")
  	.then(function(){
    	alert("Спасибо, что заинтересовались нашими проектами! Мы сообщим вам, как только начнется регистрация!");
       myform.find("button").text("Send");
    }, function(err) {
       alert("Что-то пошло не так, попробуйте отправить форму еще раз... " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});

var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
goToSlide(currentSlide+1);
}

function previousSlide(){
goToSlide(currentSlide-1);
}

function goToSlide(n){
slides[currentSlide].className = 'slide';
currentSlide = (n+slides.length)%slides.length;
slides[currentSlide].className = 'slide showing';
}

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow(){
pauseButton.innerHTML = '&#9658;'; // play character
playing = false;
clearInterval(slideInterval);
}

function playSlideshow(){
pauseButton.innerHTML = '&#10074;&#10074'; // pause character
playing = true;
slideInterval = setInterval(nextSlide,2000);
}


})(jQuery);
