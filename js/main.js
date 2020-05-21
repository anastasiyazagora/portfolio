$(document).ready(function () {
    const mobileMenuToggle = document.querySelector('.toggle-menu');
    const mobMenu = document.querySelector('.header-menu');
    const overlay = document.querySelector('#overlay');
    const bodyEl = document.querySelector('body');

    mobileMenuToggle.addEventListener('click', function(){
        mobMenu.classList.toggle('active');
        this.classList.toggle('active');
        overlay.classList.toggle('active');
        bodyEl.classList.toggle('active');

    })

    window.addEventListener('resize', function(){
        mobMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        overlay.classList.remove('active');
        bodyEl.classList.remove('active');
    })

    let containerEl = document.querySelector('#portfolio-projects');
    let mixer = mixitup(containerEl, {
        classNames: {
            block: ""
        }
    })

    
})