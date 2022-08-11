let hamburger = document.querySelector('.nav-hamburger');
let mobileMenu = document.querySelector('.nav-mobile-menu')

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

// Counter section
let counters = document.querySelectorAll('.counter');
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
    stop:document.querySelector("#stop"),
    video:  document.querySelector('video'),
    init: function(){
        videoPlayer.play.addEventListener('click', videoPlayer.playVideo);
        videoPlayer.stop.addEventListener('click', videoPlayer.stopVideo);
    },
    playVideo: function(){
        videoPlayer.video.play();
    },

    stopVideo: function(){
        videoPlayer.video.pause();
    }
}

videoPlayer.init();



