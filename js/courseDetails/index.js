const lWTitle = document.querySelectorAll(".l_w_title");
const list = document.querySelectorAll(".list");

console.log(list);

function hide(is) {
  var icons = is.childNodes[1].childNodes[1].childNodes[1];
  if (is.id == 0) {
    list[0].classList.toggle("acti");
    icons.classList.toggle("fa-sort-up");
    icons.classList.toggle("fa-caret-right");
  }
  if (is.id == 1) {
    list[1].classList.toggle("acti");
    icons.classList.toggle("fa-sort-up");
    icons.classList.toggle("fa-caret-right");
  }
  if (is.id == 2) {
    list[2].classList.toggle("acti");
    icons.classList.toggle("fa-sort-up");
    icons.classList.toggle("fa-caret-right");
  }
  if (is.id == 3) {
    list[3].classList.toggle("acti");
    icons.classList.toggle("fa-sort-up");
    icons.classList.toggle("fa-caret-right");
  }
  if (is.id == 4) {
    list[4].classList.toggle("acti");
    icons.classList.toggle("fa-sort-up");
    icons.classList.toggle("fa-caret-right");
  }
  if (is.id == 5) {
    list[5].classList.toggle("acti");
    icons.classList.toggle("fa-sort-up");
    icons.classList.toggle("fa-caret-right");
  }
  if (is.id == 6) {
    list[6].classList.toggle("acti");
    icons.classList.toggle("fa-sort-up");
    icons.classList.toggle("fa-caret-right");
  }
  if (is.id == 7) {
    list[7].classList.toggle("acti");
    icons.classList.toggle("fa-sort-up");
    icons.classList.toggle("fa-caret-right");
  }
  if (is.id == 8) {
    list[8].classList.toggle("acti");
    icons.classList.toggle("fa-sort-up");
    icons.classList.toggle("fa-caret-right");
  }
  if (is.id == 9) {
    list[9].classList.toggle("acti");
    icons.classList.toggle("fa-sort-up");
    icons.classList.toggle("fa-caret-right");
  }
}
