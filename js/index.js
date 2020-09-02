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
// 6th - creates border on dbl click 
mapPic.addEventListener('dblclick', () => {
    mapPic.style.border = '2px solid blue';
});

const introNav = document.querySelector('a')
// 7th - changes bckgrnd color
introNav.addEventListener('focusin',() => {
    introNav.style.background = 'lightblue';
});
// 8th - changes color back to normal
introNav.addEventListener('focusout',() => {
    introNav.style.background = '';
});

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;
// 9th - logs how many times the screen is resized
window.addEventListener('resize', reportWindowSize);


// 10th - will show in log when leaving or starting fullscreen mode
document.addEventListener('fullscreenchange', (event) => {
    if (document.fullscreenElement) {
      console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
    } else {
      console.log('Leaving full-screen mode.');
    }
  });
    