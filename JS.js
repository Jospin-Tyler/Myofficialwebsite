const menuHamberger = document.querySelector(".menu-hambourger")
const navlinks = document.querySelector(".navlinks")

menuHamberger.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu')
})