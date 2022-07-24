const navItem = document.querySelector('.nav__list__item:last-child');
const navItemDropdown = document.querySelector('.nav__item__dropdown');

navItem.addEventListener('click', openDropdown);

function openDropdown() {
    navItemDropdown.classList.toggle('open');
}

//Open Dropdown Mobile Menu
const navMobileItem = document.querySelector('#drpdwn');
const navMobileItemDropdown = document.querySelector('#dropdown');

navMobileItem.addEventListener('click', openMobileDropdown);

function openMobileDropdown() {
    navMobileItemDropdown.classList.toggle('open');
}

// Open Main Mobile Menu
const hamburgerIcon = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('#mobileMenu');

hamburgerIcon.addEventListener('click', openMobileMenu);

function openMobileMenu() {
    mobileMenu.classList.toggle('openMobileMenu');
}

// Close Main Mobile Menu whe click on item
// const mobileMenuItems = document.querySelectorAll('#navItem');

// for (mobileMenuItem of mobileMenuItems) {
//     mobileMenu.addEventListener('click', closeMobileMenu);
// }

// function closeMobileMenu() {
//     mobileMenu.classList.add('openMobileMenu');
// }
