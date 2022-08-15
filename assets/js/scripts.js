$(document).ready(function () {
	const progress = document.querySelector('.progress-done');
	progress.style.width = progress.getAttribute('data-done') + '%';
	progress.style.opacity = 1;

	function newProgress(selectorName) {
		var progress2 = document.querySelector('.' + selectorName);
		barwidth = progress2.getAttribute('data-done') + '%';
		progress2.style.width = progress2.getAttribute('data-done') + '%';
		progress2.style.opacity = 1;
		console.log(barwidth);
	}
	newProgress('progress-done');
	newProgress('progress-done2');
	newProgress('progress-done3');
	newProgress('progress-done4');
	newProgress('progress-done5');

	// Counter Up
	$('.count span').counterUp({
		time: 2000
	});

	//  Recommendations Area
	$('.recommendation-items').owlCarousel({
		loop: true,
		margin: 10,
		autoplay: true,
		navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
		nav: true,
		dots: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 2,
			}
		}
	})

	//  Newsletter Area
	$(".news-leatter-items").owlCarousel({
		loop: true,
		margin: 10,
		autoplay: true,
		nav: true,
		navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
		dots: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 2,
			}
		}
	});

	//   Magnific Popup
	$('.work-gallery-img').magnificPopup({
		type: 'image',
		delegate: 'a',
		gallery: { enabled: true }
	});

	// Type Js
	var typed = new Typed('.data-text', {
		strings: ['automation tools.', 'design mockups.', 'Deautomation tools.', 'design mockups.', 'design mockups.'],
		typeSpeed: 60,
		backSpeed: 60,
		loop: true
	});

	// Mixitup
	var mixer = mixitup('.works-gallery');

	// Menu Area
	$('#off-canvas').click(function () {
		$('.my-body-main-contant').addClass('show');

	});
	$('.off-btn.text-reset').click(function () {
		$('.my-body-main-contant').removeClass('show');

	});
	$(' .off-btn.text-reset').on('click', function () {
		setTimeout(function () {
			$('.my-body-main-contant').removeClass('show');
		}, 600);
	});


});

// Preloader area section Start
$(window).on('load', function () {
	$(".spinner").delay(800).fadeOut("slow");
});

// Disable Mouse Right Click
window.oncontextmenu = function () {
	return false;

}

//  Profile Section Cercle

$(".circle_percent").each(function () {
	var $this = $(this),
		$dataV = $this.data("percent"),
		$dataDeg = $dataV * 3.6,
		$round = $this.find(".round_per");
	$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
	$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
	$this.prop('Counter', 0).animate({ Counter: $dataV },
		{
			duration: 2000,
			easing: 'swing',
			step: function (now) {
				$this.find(".percent_text").text(Math.ceil(now) + "%");
			}
		});
	if ($dataV >= 51) {
		$round.css("transform", "rotate(" + 360 + "deg)");
		setTimeout(function () {
			$this.addClass("percent_more");
		}, 1000);
		setTimeout(function () {
			$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
		}, 1000);
	}
	// 
	$('.left-toggle ').on('click', function (evt) {
		$(".profile-left-side").toggleClass('open');
		$(this).hide();
		$('.close-toggle').show();
		return false;
	});
	$('.close-toggle ').on('click', function (evt) {
		$(".profile-left-side").toggleClass('open');
		$(this).hide();
		$('.left-toggle').show();
		return false;
	});

});

