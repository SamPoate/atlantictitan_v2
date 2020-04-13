import '../scss/main.scss';
// import _ from 'lodash';
import $ from 'jquery';
import 'slick-carousel';

const navbar = document.getElementById('navbar');

const onScroll = () => {
    const scroll = document.documentElement.scrollTop;

    if (scroll > 0) {
        navbar.classList.add('bg--white');
    } else {
        navbar.classList.remove('bg--white');
    }
};

const scrollToPartnerships = () => {
    document.getElementById('sponsorship').scrollIntoView({
        behavior: 'smooth',
    });
};

// const throttledOnScroll = _.throttle(onScroll, 100, {});

window.addEventListener('scroll', onScroll);
document
    .getElementById('more-arrows')
    .addEventListener('click', scrollToPartnerships);

const nav = document.querySelector('#navbar');
const menu = document.querySelector('#menu');
const menuToggle = document.querySelector('.nav__toggle');
const menuItems = document.querySelectorAll('.nav__item');
let isMenuOpen = false;

// TOGGLE MENU ACTIVE STATE
menuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    isMenuOpen = !isMenuOpen;

    // toggle a11y attributes and active class
    menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
    menu.hidden = !isMenuOpen;
    nav.classList.toggle('nav--open');
});

menuItems.forEach((menuItem) => {
    if (window.innerWidth < 661) {
        menuItem.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;

            menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
            menu.hidden = !isMenuOpen;
            nav.classList.toggle('nav--open');
        });
    }
});

// TRAP TAB INSIDE NAV WHEN OPEN
nav.addEventListener('keydown', (e) => {
    // abort if menu isn't open or modifier keys are pressed
    if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
        return;
    }

    // listen for tab press and move focus
    // if we're on either end of the navigation
    const menuLinks = menu.querySelectorAll('.nav__link');
    if (e.keyCode === 9) {
        if (e.shiftKey) {
            if (document.activeElement === menuLinks[0]) {
                menuToggle.focus();
                e.preventDefault();
            }
        } else if (document.activeElement === menuToggle) {
            menuLinks[0].focus();
            e.preventDefault();
        }
    }
});

$('#carousel_js').slick({
    slidesToShow: window.innerWidth < 661 ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
});
