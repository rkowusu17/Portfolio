let year = document.getElementById("year");
let thisYear = new Date().getFullYear();
year.textContent = thisYear;

// function regards() {
//   alert("Thank you");
// }
// const mobileBtn = document.querySelector(".moble-view");
// const mobileMenu = document.querySelector(".mobile-links");
// let closeBtn = document.getElementById("mobile-menu"

const mobileBtn = document.querySelector(".fa-bars");
const mobileMenu = document.querySelector(".mobile-links");
mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// const copy = document.querySelector(".stack-list").cloneNode(true);
// document.getElementById("stack").appendChild(copy);

// console.log(text);
// console.log(email);

// document.addEventListener("DOMContentLoaded", initApp);

// function close() {
//   mobileMenu.style.display = "hidden";
// }
