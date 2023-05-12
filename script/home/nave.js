const mobileNavbarBbtn = document.querySelector(".mobile-navbar-btn");
const allHadItem = document.querySelector(".header-item");
const mobileNavbarBtn = document.querySelector(".mobile-navbar-btn");

mobileNavbarBbtn.addEventListener("click", () => {
  allHadItem.classList.toggle("h-active");
  mobileNavbarBtn.classList.toggle("h-active");
});
