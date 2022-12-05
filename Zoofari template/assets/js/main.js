// Open / Close Nav
let hamburger = document.getElementById('hamburger');
let mobileMenu = document.querySelector('.nav__mobile-menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('hidden');
});

// Close hamburger menu
let links = document.querySelectorAll('.nav-mobile-menu li');

links.forEach((link) => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        hamburger.classList.remove('open');
    });
});


// Close mobile menu when we scroll
window.addEventListener('scroll', () => {
    mobileMenu.classList.add('hidden');
    hamburger.classList.remove('open');
});


// Counter section
let counters = document.querySelectorAll('.numbers__counter');
let scrollStarted = false;
document.addEventListener('scroll', scrollPage);

function scrollPage() {
    const scrollPos = window.scrollY;

    if (scrollPos > 950 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if (scrollPos < 700 && scrollStarted) {
        reset();
        scrollStarted = false;
    }
}

function countUp() {
    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {

            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;
            const increment = target / 100;

            if (c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 75);
            }
            else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}

function reset() {
    counters.forEach((counter) => (counter.innerHTML = '0'));
}


// Video section
let videoPlayer = {
    play: document.querySelector("#play"),
    stop: document.querySelector("#stop"),
    video: document.querySelector('video'),
    init: function () {
        videoPlayer.play.addEventListener('click', videoPlayer.playVideo);
        videoPlayer.stop.addEventListener('click', videoPlayer.stopVideo);
    },
    playVideo: function () {
        videoPlayer.video.play();
    },

    stopVideo: function () {
        videoPlayer.video.pause();
    }
}

videoPlayer.init();


// Validate form
let submitBtn = document.getElementById('sendForm');
submitBtn.addEventListener('click', validateForm);

function validateForm(e) {

    e.preventDefault();
    console.log(e.target);

    let formElements = document.querySelectorAll('.contact__input');
    let message = document.getElementById('message');

    formElements.forEach((element) => {

        if (element.value == null || element.value == "") {
            message.innerText = '* Please fill up all fields in form';
            setTimeout(function () {
                message.textContent = '';
            }, 3000);
        }

        else {
            message.innerText = 'The form was sent successfully';
            element.value = "";
            setTimeout(function () {
                message.textContent = '';
            }, 3000);
        }
    });
}



