$(function () {
	let introH = $('#intro').innerHeight();
	let scrollOffset = $(window).scrollTop();
	let header = $('#header');

	/* Fixed Header */
	checkScroll(scrollOffset);

	$(window).on('scroll', function () {
		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset) {
		if (scrollOffset >= introH) {
			header.addClass('header--fixed');
		} else {
			header.removeClass('header--fixed');
		}
	}

	/* Burger menu Close&Open */
	$('#burger').on('click', function (event) {
		event.preventDefault();
		$('#nav__menu').toggleClass('active');
	});

	/* Closing burger menu after click */
	$('#nav__menu').on('click', function () {
		$(this).toggleClass('active');
	});
});
