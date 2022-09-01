const menuBtn = document.querySelector('.menu');
const mobileMenu = document.querySelector('.nav-right')

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hide');
})