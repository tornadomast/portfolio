const hamburger = document.querySelector('.promo__hamburger'),
        menu = document.querySelector('.menu'),
        closeBtn = document.querySelector('.menu__close');


hamburger.addEventListener('click', () => {

    menu.classList.add('active')
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active')
});