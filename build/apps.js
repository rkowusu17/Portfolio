let year = document.getElementById("year");
let thisYear = new Date().getFullYear();
year.textContent = thisYear;

function regards() {
  alert("Thank you");
}
let mobileBtn = document.getElementById("mobile-btn");
let closeBtn = document.getElementById("close-btn");
let mobileMenu = document.getElementById("mobile-menu");

function show() {
  mobileMenu.style.display = "block";
}

// function close() {
//   mobileMenu.style.display = "hidden";
// }
