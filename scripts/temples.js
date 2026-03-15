const hamBtn = document.querySelector('.hamburger-menu')
const navMenu = document.querySelector('.nav-menu')

hamBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamBtn.textContent = navMenu.classList.contains('open') ? "X" : "☰";
})