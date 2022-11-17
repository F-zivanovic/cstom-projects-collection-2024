// Open/Close menu
let toggle = document.getElementById('nav-toggle');
let menu = document.getElementById('nav-menu');
let close = document.getElementById('nav-close');

toggle.addEventListener('click', () => {
    menu.classList.add('show-menu');
});

close.addEventListener('click', () => {
    menu.classList.remove('show-menu');
});


// Close menu when we click on each nav__link
let navLinks = document.querySelectorAll('.nav__link');

for (let navLink of navLinks) {
    navLink.addEventListener('click', () => {
        menu.classList.remove('show-menu');
    });
}

// Calculate BMI
let calculateForm = document.getElementById('calculate-form'),
    calculateCM = document.getElementById('calculate-cm'),
    calculateKG = document.getElementById('calculate-kg'),
    formMessage = document.getElementById('calculate-message');

calculateForm.addEventListener('submit', calculateBMI);

function calculateBMI(e) {
    e.preventDefault();

    if (calculateCM.value === '' || calculateKG.value === '') {
        formMessage.textContent = 'Fill both input fields';

        setTimeout(() => {
            formMessage.textContent = '';
        }, 3000);
    }
    else {

        console.log(calculateCM.value);
        console.log(calculateKG.value);


        let cm = calculateCM.value / 100;
        let kg = calculateKG.value;
        let bmi = Math.round(kg / (cm * cm));

        if (bmi < 18.5) {
            formMessage.textContent = `Your BMI is ${bmi} and you are skiny`;
        }
        else if (bmi < 25) {
            formMessage.textContent = `Your BMI is ${bmi} and you are health`;
        }
        else {
            formMessage.textContent = `Your BMI is ${bmi} and you are overweight`;
        }

        calculateCM.value = '';
        calculateKG.value = '';

        setTimeout(() => {
            formMessage.textContent = '';
        }, 3000);
    }
}


// Scoll up
let scrollUp = document.getElementById('scroll-up');

scrollUp.addEventListener('click', function () {
    window.scroll({ top: 0 });
});

window.addEventListener('scroll', function () {
    let scrollUp = document.getElementById('scroll-up');

    this.scrollY >= 350 ? scrollUp.classList.add('show')
        : scrollUp.classList.remove('show');
});



// Email JS
const contactForm = document.getElementById('contact-form'),
    contactUser = document.getElementById('contact-user'),
    contactMessage = document.getElementById('contact-message');


contactForm.addEventListener('submit', sendEmail);

function sendEmail(e) {

    e.preventDefault();

    if (contactUser.value === '') {
        contactMessage.textContent = 'Please enter your email'

        setTimeout(function () {
            contactMessage.textContent = '';
        }, 3000);
    }
    else {
        emailjs.sendForm('service_3r34r1r', 'template_9fkeybm', '#contact-form', '6YxKlxGeytAZV2O1r')
            .then(() => {

                contactMessage.textContent = 'You registered successfuly';
                setTimeout(function () {
                    contactMessage.textContent = '';
                }, 3000)
            }, (error) => {
                alert('FAILED...', error);
            })

        contactUser.value = '';
    }
}