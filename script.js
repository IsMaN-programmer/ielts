document.addEventListener("DOMContentLoaded", function () {
    const submenuToggle = document.querySelector('.submenu-toggle');
    const submenu = submenuToggle.nextElementSibling;

    submenuToggle.addEventListener('click', function (e) {
        e.preventDefault(); // Предотвращаем переход по ссылке
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
});
