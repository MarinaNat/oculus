//Инициализируем Swiper

const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.blog__button-right',
		prevEl: '.blog__button-left',
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		}
	}

});


//бургер-меню

const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.menu__mobile');

menuBtn.addEventListener('click', () => {
	menuMobile.classList.toggle('menu__open');
})

