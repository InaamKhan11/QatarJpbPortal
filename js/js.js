let currentIndexM = 1;
const totalSlidesM = 4; // Number of original slides (without duplicates)
const buttonsM = document.querySelectorAll('.button-containerM button');

function showSlideM(indexM) {
    const carouselM = document.querySelector('.carouselM');
    const slideWidthM = document.querySelector('.carousel-itemM').offsetWidth;
    carouselM.style.transition = 'transform 0.5s ease-in-out';
    carouselM.style.transform = 'translateX(' + (-slideWidthM * (indexM + 1)) + 'px)'; // indexM + 1 to account for the duplicated slide at the beginning

    currentIndexM = indexM + 1;
    updateButtonStylesM();
}

function nextSlideM() {
    const carouselM = document.querySelector('.carouselM');
    const slideWidthM = document.querySelector('.carousel-itemM').offsetWidth;
    currentIndexM++;
    carouselM.style.transition = 'transform 0.5s ease-in-out';
    carouselM.style.transform = 'translateX(' + (-slideWidthM * currentIndexM) + 'px)';

    if (currentIndexM === totalSlidesM + 1) {
        setTimeout(() => {
            carouselM.style.transition = 'none';
            currentIndexM = 1;
            carouselM.style.transform = 'translateX(' + (-slideWidthM * currentIndexM) + 'px)';
        }, 500); // Wait for the transition to end
    }

    updateButtonStylesM();
}

function jumpToSlideM(indexM) {
    showSlideM(indexM);
}

function updateButtonStylesM() {
    let buttonIndexM = (currentIndexM - 1) % totalSlidesM;
    buttonsM.forEach((buttonM, indexM) => {
        if (indexM === buttonIndexM) {
            buttonM.classList.add('activeM');
        } else {
            buttonM.classList.remove('activeM');
        }
    });
}

// Show the first slide initially without transition
const carouselM = document.querySelector('.carouselM');
const slideWidthM = document.querySelector('.carousel-itemM').offsetWidth;
carouselM.style.transform = 'translateX(' + (-slideWidthM * currentIndexM) + 'px)';
carouselM.style.transition = 'none';
updateButtonStylesM(); // Ensure the correct button is active when the page is refreshed

// Automatically change slides every 1 second
setInterval(nextSlideM, 4000);



// second inner section start 
let currentIndexN = 0;
const totalSlidesN = 2; // Number of slides
const buttonsN = document.querySelectorAll('.button-containerN button');

function showSlideN(indexN) {
    const carouselN = document.querySelector('.carouselN');
    const slideWidthN = document.querySelector('.carousel-itemN').offsetWidth;
    carouselN.style.transition = 'transform 0.5s ease-in-out';
    carouselN.style.transform = 'translateX(' + (-slideWidthN * indexN) + 'px)';

    currentIndexN = indexN;
    updateButtonStylesN();
}

function nextSlideN() {
    currentIndexN = (currentIndexN + 1) % totalSlidesN;
    showSlideN(currentIndexN);
}

function jumpToSlideN(indexN) {
    showSlideN(indexN);
}

function updateButtonStylesN() {
    buttonsN.forEach((buttonN, indexN) => {
        if (indexN === currentIndexN) {
            buttonN.classList.add('active');
        } else {
            buttonN.classList.remove('active');
        }
    });
}






