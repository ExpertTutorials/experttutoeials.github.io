const navToggle = document.querySelector('.toggle')
const navLinks = document.querySelector('.links')
const navLink = document.querySelectorAll('.link')
const navLogo = document.querySelector('.logo')

const mobileMenu = () => {
    if (navToggle.name === "menu-outline") {
        navToggle.name = "close-outline"
        navLinks.classList.add('active')
    }
    else {
        navToggle.name = "menu-outline"
        navLinks.classList.remove('active')
    }
}

const closeMobileMenu = () => {
    if (window.innerWidth < 801) {
        navToggle.name = "menu-outline"
        navLinks.classList.remove('active')
    }
}

navToggle.addEventListener("click", mobileMenu)
navLogo.addEventListener("click", closeMobileMenu)
// navLink.addEventListener("click", closeMobileMenu)
// let Link;
// for (Link in navLinks) {
//     Link.addEventListener("click", closeMobileMenu)
// }

navLink.forEach(
    link => {
        link.addEventListener("click",closeMobileMenu);
    }
)