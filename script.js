const navbar = document.getElementById('navbar');
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-styling');
    }

    else {
        navbar.classList.remove('navbar-styling');
    }
})

burger.addEventListener('click', () => {
    menu.classList.toggle('translate-x-0');
})



var typed = new Typed('#typing', {
    strings: ['Developer', 'Singer', 'Traveller', 'Coder'],
    typeSpeed: 100,
    loop: true,
    backSpeed: 100,
    backDelay: 600,
    showCursor: false,
});