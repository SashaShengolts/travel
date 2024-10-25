//Находим элементы
const btn = document.querySelector('#btn-mobile-nav')
const mobileBtnImg = document.querySelector('#mobile-nav-img')
const mobileNav = document.querySelector('#mobile-nav')
const header = document.querySelector('#header')

//Добовляем прослушку по клику
btn.addEventListener('click', function () {

    btn.classList.toggle('open');
    mobileNav.classList.toggle('open');
    header.classList.toggle('header-white-bg');
    document.body.classList.toggle('no-scroll');

    if (btn.classList.contains('open')) {


        mobileBtnImg.src = "./img/contacts/nav-close.svg"
    } else {
        mobileBtnImg.src = "./img/contacts/open-mobile-nav.svg"
    }
})

