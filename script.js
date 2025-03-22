// Анимация для кнопки
document.querySelector('.cta-button').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.05)';
});

document.querySelector('.cta-button').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Динамическое обновление заголовка
window.addEventListener('load', () => {
    const header = document.querySelector('header h1');
    header.style.opacity = '0';
    setTimeout(() => {
        header.style.transition = 'opacity 1s';
        header.style.opacity = '1';
    }, 500);
});
