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

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwOGDbTiSpy9uK12xrRUpTkMra2iioo1RGm93y0cg0bQe60t3O8cTc2tfjPs87W_Mme/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msgEl.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        msgEl.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

const msgEl = document.getElementById("msg");
