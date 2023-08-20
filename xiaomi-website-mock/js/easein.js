const swiperImages = document.querySelector('.swiper-album');
// const swiper = document.querySelector('')
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex --;
        updateSwiper();

    }
    else if (currentIndex == 0) {
        currentIndex = 4;
        updateSwiper();
    }
} );

nextBtn.addEventListener('click', () => {
    if (currentIndex < 4) {
        currentIndex ++ ;
        updateSwiper();

    }
    else if (currentIndex == 4) {
        currentIndex = 0;
        updateSwiper();
    }
});

function updateSwiper() {
    swiperImages.style.transform = `translateX(-${currentIndex * 20}%)`
}