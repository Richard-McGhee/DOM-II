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
    });

    elem.addEventListener('mouseleave', (event) => {
        elem.style.color = '#212529';
    });

});

// Logo Stuff

logoHeading.addEventListener('mouseenter', (event) => {
    logoHeading.style.cssText = 'color: blue; cursor: pointer;';
});

logoHeading.addEventListener('mouseleave', (event) => {
    logoHeading.style.color = '#212529';
});