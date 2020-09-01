// Your code goes here
const mnFunHeader = document.querySelector('.logo-heading')

mnFunHeader.addEventListener('mouseenter', () => {
    mnFunHeader.style.transform = 'scale(1.5)';
    mnFunHeader.style.transition = 'transform 0.4s'
})
mnFunHeader.addEventListener('mouseleave', () => {
    mnFunHeader.style.transform = 'scale(1)'
})
