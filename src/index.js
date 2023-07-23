import './index.html';
import './index.scss';

const swiperBrand = new Swiper('.image-slider', {
    direction: 'horizontal',
    loop: 'true',
    slidesPerView: 'auto',
    spaceBetween: 16,

    breakpoints: {
        768: {
            enabled: false,
        },
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


});

const toggleButton = document.querySelector('.brand-block__show-more-button');
let flase_or_true = true
const element = document.getElementById('element'); // Замените 'yourElementId' на идентификатор вашего элемента
const height = element.offsetHeight;
const brandShowMore = document.querySelector('.brand-block__show-more-button');

brandShowMore.addEventListener('click', () => {
    changeCSS()
});

function changeCSS() {
    if (height === 160) {
        if (window.innerWidth > 1200) {
            const mediaQuery = window.matchMedia("(min-width: 1120px)");
            const swiperSlides = document.querySelectorAll('.swiper-slide-brand');
            if (flase_or_true) {
                if (mediaQuery.matches) {
                    for (let i = 0; i < swiperSlides.length; i++) {
                        swiperSlides[i].style.display = 'flex';
                        toggleButton.innerHTML = "Скрыть";
                        toggleButton.style.setProperty('--transform-rotate', 'rotate(180deg)');
                        flase_or_true = false;
                    }
                }
            } else {
                if (mediaQuery.matches) {
                    for (let i = 0; i < swiperSlides.length; i++) {
                        swiperSlides[i].style = '.swiper-slide-brand:nth-last-child(-n + 3) { display: none;  }';
                        toggleButton.innerHTML = "Показать все";
                        toggleButton.style.setProperty('--transform-rotate', 'rotate(0deg)');
                        flase_or_true = true;
                    }
                }
            }
        } else if (window.innerWidth < 1200 && window.innerWidth >= 768) {
            const mediaQuery = window.matchMedia("(min-width: 768px)");
            const swiperSlides = document.querySelectorAll('.swiper-slide-brand');
            if (flase_or_true) {
                if (mediaQuery.matches) {
                    for (let i = 0; i < swiperSlides.length; i++) {
                        swiperSlides[i].style.display = 'flex';
                        toggleButton.innerHTML = "Скрыть";
                        toggleButton.style.setProperty('--transform-rotate', 'rotate(180deg)');
                        flase_or_true = false;
                    }
                }
            } else {
                if (mediaQuery.matches) {
                    for (let i = 0; i < swiperSlides.length; i++) {
                        swiperSlides[i].style = '.swiper-slide-brand:nth-last-child(-n + 3) { display: none;  }';
                        toggleButton.innerHTML = "Показать все";
                        toggleButton.style.setProperty('--transform-rotate', 'rotate(0deg)');
                        flase_or_true = true;
                    }
                }
            }
        } else {

        }
    } else {}

}