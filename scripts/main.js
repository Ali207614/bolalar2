var overlay = document.querySelector('.overlay')
var modal = document.querySelector('.head-modal')
var window1 = document.querySelector('.modal')
var body = document.querySelector('body')
var headModal1 = document.querySelector('.head-modal1')
var menumobile = document.querySelector('.menu-mobile')
var headleft=document.querySelector('.head-left__menu1')
var headmodal2=document.querySelector('.head-modal2')
headModal1.addEventListener('click', function () {
    overlay.classList.toggle('visible')
    window1.classList.add('window')
    window1.classList.remove('modal')
    body.classList.toggle('hidden')
});
headmodal2.addEventListener('click', function () {
    overlay.classList.toggle('visible')
    window1.classList.add('window')
    window1.classList.remove('modal')
    body.classList.toggle('hidden')
});

modal.addEventListener('click', function () {
    overlay.classList.toggle('visible')
    window1.classList.add('window')
    window1.classList.remove('modal')
    body.classList.toggle('hidden')
});
overlay.addEventListener('click', function () {
    overlay.classList.toggle('visible')
    window1.classList.toggle('window')
    window1.classList.toggle('modal')
    body.classList.toggle('hidden')
});
var menutablet = document.querySelector('.menu-tablet')
var hamburgmenu = document.querySelector('.hamburg-menu')
var links = document.querySelector('.tablet-left-menu')
var hamburgmenu2=document.querySelector('.hamburg-menu2')
hamburgmenu2.addEventListener('click', function () {
    menutablet.classList.toggle("menu-table")
    links.classList.toggle("menu-table")
    menumobile.classList.toggle('height')
    headleft.classList.toggle("head-left2")
});
hamburgmenu.addEventListener('click', function () {
    menutablet.classList.toggle("menu-table")
    links.classList.toggle("menu-table")
    menumobile.classList.toggle('height')
    headleft.classList.toggle("head-left2")
});
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


var swiper = new Swiper('.swiper-container1', {
    slidesPerView: 4,
    spaceBetween: 32,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },

});

var swiper = new Swiper('.swiper-container2', {
    speed: 600,
    parallax: true,
    loop: true,
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var mySwiper = new Swiper('.swiper-container3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletActiveClass: 'swiper-pagination-bullet-active',
    },
})
var mySwiper = new Swiper('.sport-container-tablet', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletActiveClass: 'swiper-pagination-bullet-active',
    },
})