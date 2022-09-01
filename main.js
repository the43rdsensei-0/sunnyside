const menuBtn = document.querySelector('.menu');
const mobileMenu = document.querySelector('.nav-right')

menuBtn.addEventListener('click', () => {
    console.log(mobileMenu.classList.toggle('hide'));
})