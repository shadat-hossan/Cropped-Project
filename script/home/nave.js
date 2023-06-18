const mobileNavbarBbtn = document.querySelector(".mobile-navbar-btn");
const allHadItem = document.querySelector(".header-item");
const mobileNavbarBtn = document.querySelector(".mobile-navbar-btn");

mobileNavbarBbtn.addEventListener("click", () => {
    allHadItem.classList.toggle("h-active");
    mobileNavbarBtn.classList.toggle("h-active");
});

const header = document.querySelector(".navBar");
// const mainBar = document.querySelector("main");

window.addEventListener('scroll', function() {
    header.classList.toggle("sticky", window.scrollY > 150)
})

const active_page = window.location.pathname;
const navLinks = document.querySelectorAll(".all-had-item a");

navLinks.forEach(links => {
    if (links.href.includes(`${active_page}`)) {
        links.classList.add("active")
    }
})