/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
// Scripts

window.addEventListener('DOMContentLoaded', event => {

    // Проверка на наличие элемента sideNav
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    }

    // Проверка на наличие элемента navbarToggler
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    if (navbarToggler) {
        const responsiveNavItems = [].slice.call(
            document.querySelectorAll('#navbarResponsive .nav-link')
        );
        
        // Для каждого элемента меню
        responsiveNavItems.forEach(function (responsiveNavItem) {
            responsiveNavItem.addEventListener('click', () => {
                // Закрытие меню при нажатии, если меню отображается на мобильном устройстве
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });
    }

});
