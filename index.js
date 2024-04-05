const hamburger = document.getElementById('hamburger')
const displayHamburger = document.getElementById('display-hamburger')
const tutup = document.getElementById('close')

hamburger.addEventListener('click',function(){
    displayHamburger.classList.remove('hidden')
    displayHamburger.classList.add('nav-absolute-seluler')
    displayHamburger.classList.add('slide-right')
    hamburger.style.display='none'
    tutup.style.display='flex'
})
tutup.addEventListener('click',function(){
    displayHamburger.classList.remove('nav-absolute-seluler')
    displayHamburger.classList.remove('slide-right')
    displayHamburger.classList.add('hidden')
    hamburger.style.display='flex'
    tutup.style.display='none'
})