const firSwiperPic = document.getElementById("first-swiper-pic");
const secSwiperPic = document.getElementById("second-swiper-pic");

const swiperPicNames = [
    "./img/xiaomi-1.webp",
    "./img/xiaomi-2.webp",
    "./img/xiaomi-3.jpg",
    "./img/xiaomi-4.webp",
    "./img/xiaomi-5.webp"
];

let nameIndex = 1;
let opac = 1;
let fade = 1;

const swiperPicFadeAnimation = setInterval(() => innerFunc(), 200);

function innerFunc() {
    // fir pic is fading, and sec pic revealing
    if (fade) {
        opac -= 0.1;
        firSwiperPic.style.opacity = opac;
    } else {
        opac += 0.1;
        firSwiperPic.style.opacity = opac;
    }

    // after fir pic is totally invisible
    if (opac <= -0.5) {
        nameIndex++;
        if (nameIndex >= 5) {nameIndex = 0};
        firSwiperPic.setAttribute("src", swiperPicNames[nameIndex]);
        fade = !fade;
    }

    if (opac >= 1.5) {
        nameIndex++;
        if (nameIndex >= 5) {nameIndex = 0};
        secSwiperPic.setAttribute("src", swiperPicNames[nameIndex]);
        fade = !fade;
    }
}