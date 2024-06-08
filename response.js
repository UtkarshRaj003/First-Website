burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
a = document.querySelector('.a')
q = document.querySelector('.q')


burger.addEventListener('click', () => {
    q.classList.toggle('v-c');
    a.classList.toggle('v-c');
    navbar.classList.toggle('h-nav');
})