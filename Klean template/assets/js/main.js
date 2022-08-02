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


// Close popup
let closeBtn = document.querySelector('#close');
let popup = document.querySelector('.portfolio-popup');

closeBtn.addEventListener('click', hidePopup);

function hidePopup() {
    popup.classList.remove('visible');
}

// Open popup window
function init() {
    bindGalleryItems();
    bindKeyDown();
}

function bindGalleryItems() {
    let images = document.querySelectorAll('.portfolio-content > a');

    images.forEach((img) => {
        img.addEventListener('click', showImages);
    });
}

function showImages(event) {
    event.preventDefault();

    let link = event.target.parentElement.href;

    let popupImg = document.querySelector('.portfolio-popup > img');
    popupImg.src = link;

    let popup = document.querySelector('.portfolio-popup');

    popup.classList.add('visible');

}

// Close popup when press ESCAPE key

function bindKeyDown() {
    window.addEventListener('keydown', keyDownHandler)
}

function keyDownHandler(event) {
    switch (event.key) {
        case "Escape":
            hidePopup();
            break;
    }
}

window.addEventListener('load', init);


// Reset form
let resetBtn = document.querySelector('#reset');
let formComponents = document.querySelectorAll('.form-input');

resetBtn.addEventListener('click', resetForm);

function resetForm(){
    
    formComponents.forEach((item) => {
        item.value = '';
    });
}