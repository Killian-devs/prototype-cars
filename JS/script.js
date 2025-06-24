const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');

const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

// Verifica se é tela mobile
function isMobile() {
    return window.innerWidth <= 717;
}

// Abrir menu
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

// Fechar menu
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

// Estado inicial do menu ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    closeMenu.style.display = 'none';
    if (isMobile()) {
        openMenu.style.display = 'block';
    } else {
        openMenu.style.display = 'none';
        menu.removeAttribute('style');
    }
});

// Estado do menu ao redimensionar a tela
window.addEventListener('resize', () => {
    if (isMobile()) {
        openMenu.style.display = 'block';
    } else {
        openMenu.style.display = 'none';
        closeMenu.style.display = 'none';
        menu.removeAttribute('style');
    }
});

// Carrossel
let currentSlide = 0;
function hideSlider(){
    slider.forEach(item => item.classList.remove('on'));
}
function showSlider() {
    slider[currentSlide].classList.add('on');
}

function nextSlide() {
    hideSlider();
    currentSlide = (currentSlide + 1) % slider.length;
    showSlider();
}

function prevSlide() {
    hideSlider();
    currentSlide = (currentSlide - 1 + slider.length) % slider.length;
    showSlider();
}

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

/* setInterval(() => {
    nextSlide();
}, 5000); */ // Muda de slide a cada 5 segundos