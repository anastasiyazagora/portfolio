$(document).ready(function () {
    const mobileMenuToggle = document.querySelector('.toggle-menu');
    const mobMenu = document.querySelector('.header-menu');
    mobileMenuToggle.addEventListener('click', function(){
        mobMenu.classList.toggle('active');
    })
    })