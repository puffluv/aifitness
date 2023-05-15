const swiper = new Swiper('.slider', {
	direction: 'vertical',
	// freeMode: true,
	speed: 2400,
	parallax: true,
	spaceBetween: 5,
	mousewheel: {
	enabled: true,
	sensitivity: 2.4
	}
})

document.querySelector('.arrow-7').addEventListener('click', function() {
	swiper.slideNext()
})

document.querySelector('.arrow-next').addEventListener('click', function() {
	swiper.slideNext()
})

document.querySelector('.arrow-back').addEventListener('click', function() {
	swiper.slidePrev()
})



