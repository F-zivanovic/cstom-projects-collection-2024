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


// Services section filer
const buttons = document.querySelectorAll('.services__content__categories > button');

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        const article = document.querySelectorAll('.services__content > article');

        for (item of article) {
            item.style.display = 'none';
        }

        if (category === 'all') {
            for (item of article) {
                item.style.display = 'block';
            }
        }

        for (item of article) {
            if (item.getAttribute('data-category').includes(category)) {
                item.style.display = 'block';
            }
        }
    });
});


