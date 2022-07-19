let hamburgerIcon = document.querySelector('.nav__hamburger');
let mobileMenu = document.querySelector('.mobilemenu');
let listItems = document.querySelectorAll('.mobilemenu li');

hamburgerIcon.addEventListener('click', openMobileMenu);

function openMobileMenu() {
    mobileMenu.classList.toggle('hidden');
}

for (listItem of listItems) {
    listItem.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
}

