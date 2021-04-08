const burger = document.getElementById("burger");
const navLinks = document.querySelector('.nav-links');
const navs = document.getElementById('navs');
console.log(navLinks);

burger.addEventListener('click', ()=>{
    navs.classList.toggle('toggler')
    burger.classList.toggle('toggle');
});