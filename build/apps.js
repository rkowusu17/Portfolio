let year = document.getElementById("year");
let thisYear = new Date().getFullYear();
year.textContent = thisYear;

// function regards() {
//   alert("Thank you");
// }
let mobileBtn = document.getElementById("mobile-btn");
let closeBtn = document.getElementById("close-btn");
let mobileMenu = document.getElementById("mobile-menu");

const initApp = () => {
  const hamburgerBtn = document.getElementById("mobile-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  };
  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

// console.log(text);
// console.log(email);

document.addEventListener("DOMContentLoaded", initApp);

// function close() {
//   mobileMenu.style.display = "hidden";
// }
