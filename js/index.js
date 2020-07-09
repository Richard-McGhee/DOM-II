// Your code goes here

const navLink = document.querySelectorAll('nav a');
const logoHeading = document.querySelector('.logo-heading');
const buttons = document.querySelectorAll('.btn');
const mainBody = document.querySelector('body');
const images = document.querySelectorAll('img');
const input = document.querySelector('.form-submit');
const parentContainer = document.querySelector('.container');
const mainHome = document.querySelector('.home');
const navBar = document.querySelector('nav');


// Body
mainBody.addEventListener('wheel', (event) => {
    logoHeading.innerHTML = "FUN BUS";
});

window.addEventListener('contextmenu', (event) => {
    event.target.classList.toggle('new-body');
});

window.addEventListener('load', (event) => {
    alert('Page loaded');
});

// Nav
navLink.forEach((elem) => {

    elem.addEventListener('click', (event) => {
        event.preventDefault();
    });

    elem.addEventListener('mousedown', (event) => {
        elem.style.color = 'red';
    });

    elem.addEventListener('mouseenter', (event) => {
        elem.style.color = 'blue';
        TweenMax.to(elem, 1, {scale: 1.5});
    });

    elem.addEventListener('mouseleave', (event) => {
        elem.style.color = '#212529';
        TweenMax.to(elem, 1, {scale: 1});
    });

});