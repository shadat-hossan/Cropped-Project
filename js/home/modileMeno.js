const activePage = window.location.pathname;
const navLink = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("actives");
  }
});

const mobileMenu = document.querySelector(".mobile-menu");
const navManu = document.querySelector(".nav-manu");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  navManu.classList.toggle("active");
});

document.querySelectorAll(".nav-list").forEach((n) =>
  n.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    navManu.classList.remove("active");
  })
);

const LearnMano = document.getElementById("Learn_mano");
const SubLearn = document.getElementById("sub_learn");
