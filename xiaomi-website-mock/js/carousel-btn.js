// firSwiperPic defined in carousel-fadein.js
const currFirOpac = getComputedStyle(firSwiperPic).opacity;
const currSecOpac = getComputedStyle(secSwiperPic).opacity;

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

prevBtn.addEventListener('click', ()=>{

    clearInterval(swiperPicFadeAnimation);
    nameIndex--;
    if (nameIndex < 0) {nameIndex = 4}

    updateSwiperImage();
})

nextBtn.addEventListener('click', ()=>{

    clearInterval(swiperPicFadeAnimation);
    nameIndex++;
    if (nameIndex > 4) {nameIndex = 0}

    updateSwiperImage();
})


function updateSwiperImage() {

    if (currFirOpac >= currSecOpac) {
        firSwiperPic.setAttribute('src', swiperPicNames[nameIndex]);
        firSwiperPic.style.opacity = 1;
    } else {
        firSwiperPic.style.opacity = 0;
        secSwiperPic.setAttribute('src', swiperPicNames[nameIndex]);
    }

    setTimeout(() => {
        if (currFirOpac >=1.5) {fade=1}
        else {fade=0}
        swiperPicFadeAnimation = setInterval(() => innerFunc(), 200);
        console.log('done')
    }, 8000);

}