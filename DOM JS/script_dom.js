"use strict";
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);
console.log(modal);
// console.log(btnsOpenModal[0].textContent);
// console.log(btnsOpenModal.length);
for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener("click", function () {
    console.log("Button Clicked");
    modal.classList.remove("hidden");
  });
}
console.log(btnCloseModal);
btnCloseModal.addEventListener("click", function () {
  modal.classList.add("display-modal");
});
