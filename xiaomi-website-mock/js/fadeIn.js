const swiperimg = document.querySelectorAll('.swiper-img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    if (currentIndex <= 4 && currentIndex > 0) {
        swiperimg[currentIndex].style.opacity = 0;

        swiperimg[currentIndex-1].style.opacity = 1;
        currentIndex--;
        console.log('prev,when <=4')

    }
    else if (currentIndex == 0) {
        swiperimg[currentIndex].style.opacity = 0;
        currentIndex = 4;
        swiperimg[currentIndex].style.opacity = 1;
        console.log('prev,when ==0')

    }
})

nextBtn.addEventListener('click', () => {
    if (currentIndex >= 0 && currentIndex < 4) {
        swiperimg[currentIndex].style.opacity = 0;

        swiperimg[currentIndex+1].style.opacity = 1;
        currentIndex++;
        console.log('next,when >=0')
    }
    else if (currentIndex == 4) {
        swiperimg[currentIndex].style.opacity = 0;
        currentIndex = 0;
        swiperimg[currentIndex].style.opacity = 1;
        console.log('next,when ==4')

    }
})

showSwiper();
function showSwiper() {

    const swipers = document.getElementsByClassName("swiper-img");
    // if index = 0
    if (currentIndex ==0) {
        currentIndex++;
        return showSwiper()
    }
    console.log(`number ${currentIndex-1} removes active`)
    swipers[currentIndex -1].classList.remove("active");
    currentIndex++;
    // swipers.length = 5
    if (currentIndex > swipers.length) {
        currentIndex = 1;
    }
    console.log(`number ${currentIndex-1} adds active`)

    swipers[currentIndex -1].classList.add("active");
    setTimeout(showSwiper, 5000);
}