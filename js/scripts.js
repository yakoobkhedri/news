// mobileMenu

let hamIcon=document.getElementById('hamIcon')
let dark=document.getElementById('darkbg')
let mobileMenu=document.getElementsByClassName('mobileMenu')[0];

hamIcon.addEventListener('click',function () {
    dark.classList.add('active');
    mobileMenu.classList.add('active');
})
dark.addEventListener('click',function () {
    dark.classList.remove('active');
    mobileMenu.classList.remove('active');
})