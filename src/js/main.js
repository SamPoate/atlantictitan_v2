import '../scss/main.scss';
import _ from 'lodash';

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
        behavior: 'smooth'
    });
};

const throttledOnScroll = _.throttle(onScroll, 100, {});

window.addEventListener('scroll', throttledOnScroll);
document
    .getElementById('more-arrows')
    .addEventListener('click', scrollToPartnerships);
