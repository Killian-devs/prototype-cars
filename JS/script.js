const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');

function isMobile() {
    return window.innerWidth <= 717;
}

openMenu.addEventListener('click', () => {
    menu.style.display = 'flex';
    menu.style.right = (menu.offsetWidth * -1) + 'px';
    setTimeout(() => {
        menu.style.opacity = '1';
        menu.style.right = '0';
        openMenu.style.display = 'none';
        closeMenu.style.display = 'block';
    }, 10);
});

closeMenu.addEventListener('click', () => {
    menu.style.opacity = '0';
    menu.style.right = (menu.offsetWidth * -1) + 'px';
    setTimeout(() => {
        menu.removeAttribute('style');
        closeMenu.style.display = 'none';
        if (isMobile()) {
            openMenu.style.display = 'block';
        }
    }, 200);
});

window.addEventListener('DOMContentLoaded', () => {
    closeMenu.style.display = 'none';
    if (isMobile()) {
        openMenu.style.display = 'block';
    } else {
        openMenu.style.display = 'none';
        menu.removeAttribute('style');
    }
});

window.addEventListener('resize', () => {
    if (isMobile()) {
        openMenu.style.display = 'block';
    } else {
        openMenu.style.display = 'none';
        closeMenu.style.display = 'none';
        menu.removeAttribute('style');
    }
});