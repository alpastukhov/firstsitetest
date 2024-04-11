let stickyMenu = document.getElementById('sticky-menu');

window.addEventListener('scroll', function() {
    if(this.window.scrollY >=50) {
        stickyMenu.classList.remove('menu-hidden')
    } else {
        stickyMenu.classList.add('menu-hidden')
    }
});

document.title = 'Заголовочек страницы'

