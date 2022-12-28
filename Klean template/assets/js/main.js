// Open/close navigation list on smaller screen
let hamburger = document.getElementById('hamburger');
let navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('hidden');
    hamburger.classList.toggle('open');
});


// Close navigation list when we click on item of that list
let navListItem = document.querySelectorAll('#nav-list > li');

navListItem.forEach(function (item) {
    item.addEventListener('click', () => {
        navList.classList.remove('hidden');
        hamburger.classList.remove('open');
    });
});


// Close navigation list when we scroll down
window.addEventListener('scroll', () => {
    navList.classList.remove('hidden');
    hamburger.classList.remove('open');
});


// Services slider
let rightArrow = document.getElementById('right');
let leftArrow = document.getElementById('left');
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

    pictures.forEach((img) => {
        img.style.display = 'none';
    });
}


// Close popup
// let closeBtn = document.querySelector('#close');
// let popup = document.querySelector('.portfolio-popup');

// closeBtn.addEventListener('click', hidePopup);

// function hidePopup() {
//     popup.classList.remove('visible');
// }

// Open popup window
// function init() {
//     bindGalleryItems();
//     bindKeyDown();
// }

// function bindGalleryItems() {
//     let images = document.querySelectorAll('.portfolio-content > a');

//     images.forEach((img) => {
//         img.addEventListener('click', showImages);
//     });
// }

// function showImages(event) {
//     event.preventDefault();

//     let link = event.target.parentElement.href;

//     let popupImg = document.querySelector('.portfolio-popup > img');
//     popupImg.src = link;

//     let popup = document.querySelector('.portfolio-popup');

//     popup.classList.add('visible');

// }

// Close popup when press ESCAPE key

// function bindKeyDown() {
//     window.addEventListener('keydown', keyDownHandler)
// }

// function keyDownHandler(event) {
//     switch (event.key) {
//         case "Escape":
//             hidePopup();
//             break;
//     }
// }

// window.addEventListener('load', init);


// Reset form
let resetBtn = document.querySelector('#reset');
let formComponents = document.querySelectorAll('.form-input');

resetBtn.addEventListener('click', resetForm);

function resetForm() {

    formComponents.forEach((item) => {
        item.value = '';
    });
}


// Back to top Button

let scrollBtn = document.querySelector('#toTop');
scrollBtn.addEventListener('click', scrollToTop);

function scrollToTop() {
    window.scroll({ top: 0, behavior: "smooth" });
}


window.onscroll = function () {
    if (document.documentElement.scrollTop > 150) {
        scrollBtn.classList.add('visible');
    }
    else {
        scrollBtn.classList.remove('visible');
    }
}
