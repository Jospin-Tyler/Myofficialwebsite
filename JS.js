const menuHamberger = document.querySelector(".menu-icon")
const navlinks = document.querySelector(".nav-bar")

menuHamberger.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu')
})