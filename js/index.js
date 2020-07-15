// Your code goes here

const navLink = document.querySelectorAll('nav a');
const logoHeading = document.querySelector('.logo-heading');
const buttons = document.querySelectorAll('.btn');
const mainBody = document.querySelector('body');
const images = document.querySelectorAll('img');
const parentContainer = document.querySelector('.container');
const mainHome = document.querySelector('.home');
const navBar = document.querySelector('nav');
const footer = document.querySelector('footer');
const footerP = document.querySelector('footer p')

// Body
mainBody.addEventListener('wheel', (event) => {
    logoHeading.textContent = "FUN BUS";
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
navBar.addEventListener('dblclick', (event) => {
    navBar.style.backgroundColor = 'green';
    event.stopPropagation();
});
navBar.addEventListener('click', (event) => {
    navBar.style.backgroundColor = 'white';
    event.stopPropagation();
})

parentContainer.addEventListener('dblclick', (event) => {
    parentContainer.style.backgroundColor = 'red';
});
parentContainer.addEventListener('click', (event) => {
    parentContainer.style.backgroundColor = 'white';
});

// Logo Stuff

logoHeading.addEventListener('mouseenter', (event) => {
    logoHeading.style.cssText = 'color: blue; cursor: pointer;';
});

logoHeading.addEventListener('mouseleave', (event) => {
    logoHeading.style.color = '#212529';
});

// Image Stuff

// Images
images.forEach((elem) => {
    elem.addEventListener('dblclick', (event) => {
        elem.style.cssText = 'opacity: 0.6;';
    });
    elem.addEventListener('click', (event) => {
        elem.style.cssText = 'opacity: 1;';
    });
});

// Footer Stuff

let newForm = document.createElement('input')

newForm.addEventListener('focus', (event) => {
    newForm.setAttribute('placeholder', 'input some text here');
});
newForm.addEventListener('keypress', (event) => {
    const keyName = event.key;
    if (keyName === 'Enter') {
        alert(`You input this: --->>> ${newForm.value};`);
    }
})


footerP.prepend(newForm)

