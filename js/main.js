$(document).ready(function () {
    // nav-page
    $('#page-nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {},
        end: function () {},
        scrollChange: function ($currentListItem) {}
    });

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
    mobMenu.addEventListener('click', function(){
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
    // fake-placeholder
    const formInputs = document.querySelectorAll('.form-field');
    for (let item of formInputs) {
        const inputPlaceholder = item.nextElementSibling;

        item.addEventListener('click', function () {
            inputPlaceholder.classList.add('active');
        });

        item.addEventListener('blur', function(){
            if(this.value == ''){
                inputPlaceholder.classList.remove('active');
            }
        })
    }
    // form validate
    $('#contact-form').validate({
        rules:{
            email:{
                required: true,
                email: true
            },
            tema:{
                required: true
            },
            message:{
                required: true
            }
        },
        message:{
            email:{
                required: 'Введите Ваш email',
                email: 'Email введен не корректно'
            },
            tema:{
                required: 'Введите тему сообщения'
            },
            message:{
                required: 'Введите текст сообщения'
            }
        },
        submitHandler: function (form) {
            ajaxFormSubmit();
        }
    });
    function ajaxFormSubmit() {

        let string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку.

        //Формируем ajax запрос
        $.ajax({
            type: "POST", // Тип запроса - POST
            url: "php/mail.php", // Куда отправляем запрос
            data: string, // Какие даные отправляем, в данном случае отправляем переменную string

            // Функция если все прошло успешно
            success: function (html) {
                $("#contact-form").slideUp(800);
                $('#answer').html(html);
            }
        });

        // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
        return false;
    }

})