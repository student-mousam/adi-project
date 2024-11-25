// main.js - Client-side code
document.addEventListener('DOMContentLoaded', () => {
    // Menu and Navigation functionality
    const menu = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.header .navbar');

    function updateMenuAndNavbar() {
        const scrollY = window.scrollY || window.pageYOffset;
        
        if (scrollY > 200) {
            menu.classList.add('custom-class');
        } else {
            menu.classList.remove('custom-class');
        }
    }

    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    };

    window.onscroll = updateMenuAndNavbar;
    updateMenuAndNavbar();

    // Swiper Initialization
    // Home Slider
    new Swiper(".home-slider", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    // Row Slider
    new Swiper(".row", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar"
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });

    // Reviews Slider
    new Swiper(".reviews-slider", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        slidePerGroup: 3,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });

    // Slide Content
    new Swiper(".slide-content", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        slidePerGroup: 3,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
});
