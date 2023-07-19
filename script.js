// Modal Settings
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');


// Start (با کلیک بر روی ضربدر صفحه مدل بسته میشود)
// Start (با کلیک کردن بیرون از ـ مدل ـ صفحه مدل بسته میشود)
const modalCloseFunc = function () {
    modal.classList.add('closed');
};

modalCloseOverlay.addEventListener('click', modalCloseFunc);
// End (با کلیک کردن بیرون از ـ مدل ـ صفحه مدل بسته میشود)


modalCloseBtn.addEventListener('click', modalCloseFunc);
// End (با کلیک بر روی ضربدر صفحه مدل بسته میشود)
// Modal Settings


// Menu Bar
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
// Menu Bar


// Login Btn
// Open Login Page
document.querySelector('#login-btn').onclick = () => {
    document.querySelector('.login-form-container').classList.toggle('active');
}

// Close Login Page
document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
}
// Login Btn


// Scrolling (Move Header)
window.onscroll = () => {

    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
// Scrolling (Move Header)

// OnLoad
window.onload = () => {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }

};
// OnLoad


// home parallax scrolling
// On Mouse Move
document.querySelector('.home').onmousemove = (e) => {
    
    document.querySelectorAll('.home-parallax').forEach(elm => {
        
        let speed = elm.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

    });

};
// On Mouse Move

// On Mouse Leave
document.querySelector('.home').onmouseleave = () => {

    document.querySelectorAll('.home-parallax').forEach(elm => {

        elm.style.transform = `translateX(0px) translateY(0px)`;

    });

};
// On Mouse Leave
// home parallax scrolling


// Swiperjs Slider Main Vehicles
var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});
// Swiperjs Slider Main Vehicles



// Swiperjs Slider Featured Vehicles
var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});
// Swiperjs Slider Featured Vehicles



// Swiperjs Slider Reviews
var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});
// Swiperjs Slider Reviews