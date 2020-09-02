// Your code goes here

//Allows the header to grow on mouse enter
const mnFunHeader = document.querySelector('.logo-heading')
// 1st
mnFunHeader.addEventListener('mouseenter', () => {
    mnFunHeader.style.transform = 'scale(1.5)';
    mnFunHeader.style.transition = 'transform 0.4s'
})
// 2nd
mnFunHeader.addEventListener('mouseleave', () => {
    mnFunHeader.style.transform = 'scale(1)'
})

//
const busYellow = document.querySelector('.busPic')
// 3rd
busYellow.addEventListener('mouseover', () => {
    busYellow.style.border = '2px solid red'

// 4th - tells it to turn off border after so much time
setTimeout(function(){
    busYellow.style.border = "0px";
}, 5000);
}, false);

const buttonsBot = document.querySelector('.btn')
// 5th - counts how many times button was clicked
buttonsBot.addEventListener('click', event => {
    buttonsBot = `Click count: ${event.detail}`
});

const mapPic = document.querySelector('.content-section .img-content')
// 6th
mapPic.addEventListener('dblclick', () => {
    mapPic.style.border = '2px solid blue';
});

const introNav = document.querySelector('a')
// 7th
introNav.addEventListener('focusin',() => {
    introNav.style.background = 'lightblue';
});
// 8th
introNav.addEventListener('focusout',() => {
    introNav.style.background = '';
});