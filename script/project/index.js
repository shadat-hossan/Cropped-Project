const project_btn = document.getElementsByClassName("mobile-v-proj-btn");
const project_item = document.getElementsByClassName("all-v-proj-item");
const hClosed = document.getElementsByClassName("h-closed ");
const hMenus = document.getElementsByClassName("h-menus ");



const myFunction = () => {
    project_item[0].classList.toggle("acktivat")
    hClosed[0].classList.toggle("acktivat")
    hMenus[0].classList.toggle("acktivatMenus")

}

project_btn[0].addEventListener('click', myFunction)