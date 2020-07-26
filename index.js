let contactBtn = document.querySelector(".control-btn");
let contactBlock = document.querySelector(".contact__inner");
let iconOpen = document.querySelector(".contact__btn-open");
let iconeClose = document.querySelector(".contact__btn-close");

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contactBlock.classList.toggle("open");
  iconeClose.classList.toggle("open");
  iconOpen.classList.toggle("open");
});
