// Open/close Mobile Nav
let hamburger = document.querySelector('.nav__hamburger');
let navMobile = document.querySelector('.nav__mobile');

hamburger.addEventListener('click', () => {
    navMobile.classList.toggle('hidden');
    hamburger.classList.toggle('open');
});


// Close MobileNav when click on Nav Mobile Item
let navMobileItem = document.querySelectorAll('.nav__mobile li');

navMobileItem.forEach(function (item) {
    item.addEventListener('click', () => {
        navMobile.classList.add('hidden');
        hamburger.classList.remove('open');
    });
});

// Services slider
let rightArrow = document.querySelector('#right');
let leftArrow = document.querySelector('#left');
let pictures = document.querySelectorAll('.services-slider > img');

let imgNumber = 0;

function moveRight() {
    hidePictures();
    imgNumber++;

    if (imgNumber === pictures.length) {
        imgNumber = 0;
    }

    pictures[imgNumber].style.display = 'block';
}

function moveLeft() {
    hidePictures();
    imgNumber--;

    if (imgNumber === -1) {
        imgNumber = pictures.length - 1;
    }

    pictures[imgNumber].style.display = 'block';
}


rightArrow.addEventListener('click', moveRight);
leftArrow.addEventListener('click', moveLeft);

function hidePictures() {

    // pictures.forEach(function (img) {
    //     img.style.display = 'none';
    // });

    // for (img of pictures) {
    //     img.style.display = 'none';
    // }

    pictures.forEach((img) => {
        img.style.display = 'none';
    });
}