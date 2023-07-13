// submit pages script

const allInputfilds = document.querySelectorAll(".s25110");

allInputfilds.forEach((item) => {
  item.addEventListener("click", function () {
    allInputfilds.forEach((int) => int.classList.remove("box-shawo"));
    this.classList.add("box-shawo");
  });
});
