let menuBtn = document.querySelector('.burger-menu');
let sandwich = document.querySelector('.sandwich');
let navMenu = document.querySelector('.rates');
let navLink = document.getElementsByClassName('navLink');

menuBtn.addEventListener('click', function(){
	sandwich.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
});