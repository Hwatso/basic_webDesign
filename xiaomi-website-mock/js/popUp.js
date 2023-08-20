// This Is Option $!

const swiperItemElement = document.querySelectorAll('[swiper-item]');
const popUp = document.querySelector('.swiper-item-popup');
const popdiv = document.getElementById('popone');

swiperItemElement.forEach((swiperItem, index) => {
    swiperItem.addEventListener('mouseover', () => {
        popdiv.innerHTML = `this is option ${index}!`
        popUp.style.display = "grid";
    })
    swiperItem.addEventListener('mouseout', () => {
        popUp.style.display = "none";
    })
})
