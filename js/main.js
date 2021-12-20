$(function () {
	// Плавный скролл -------------------------------------------------------
	$(".menu__link,.header__link,.logo").on('click', function (event) {
		let width0 = $(window).width();
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top0 = $(id).offset().top;

		// Экраны больше 992
		if (width0 > 992) {

			if (id == '#works' || id == "#contact") {
				$('body,html').animate({ scrollTop: top0 - 130 }, 1500);
			}
			else {
				$('body,html').animate({ scrollTop: top0 }, 1500);
			}
		}
		// Экраны меньше 992
		else if (width0 > 576 && width0 < 992) {

			if (id == '#works') {
				$('body,html').animate({ scrollTop: top0 - 50 }, 1500);
			}

			else if (id == '#contact') {
				$('body,html').animate({ scrollTop: top0 - 65 }, 1500);
			}

			else {
				$('body,html').animate({ scrollTop: top0 - 30 }, 1500);
			}

		}
		// Экраны меньше 576
		else if (width0 < 576) {

			if (id == '#works') {
				$('body,html').animate({ scrollTop: top0 - 50 }, 1500);
			}

			else if (id == '#contact') {
				$('body,html').animate({ scrollTop: top0 - 90 }, 1500);
			}

			else {
				$('body,html').animate({ scrollTop: top0 - 35 }, 1500);
			}
		}

	});

	// Чтобы при обновлении страницы, шапка не пропадала
	let width1 = $(window).width();
	let top1 = $('.header__top').offset().top;
	console.log(top1)
	console.log(width1)

	if (top1 > 0) {
		$('.header__top').addClass('header__top--bg');
		if (width1 >= 992) {
			$('.header__top').addClass('header__top--padding');
		}
	}

	// Шапка появляется при скроле
	$(window).scroll(function () {
		let top2 = $('.header__top').offset().top;
		let width2 = $(window).width();
		if (top2 > 0) {
			$('.header__top').addClass('header__top--bg');
			if (width2 >= 992) {
				$('.header__top').addClass('header__top--padding');
			}
		}
		else {
			$('.header__top').removeClass('header__top--bg');
			$('.header__top').removeClass('header__top--padding');
		};
	});

	// Бургер
	$('.burger').on('click', function () {
		$('.burger').toggleClass('burger--active')
		$('.menu__list').toggleClass('menu__list--active')
		$('.body').toggleClass('body--active')

	})

	$('.menu__link').on('click', function () {
		width3 = $(window).width();
		if (width3 < 992) {
			$('.burger').toggleClass('burger--active')
			$('.menu__list').toggleClass('menu__list--active')
			$('.body').toggleClass('body--active')
		}
	}
	);

	$('[data-fancybox="gallery"]').fancybox({
		"width": "1000px",
	})

	var mixer = mixitup('.gallery')
});