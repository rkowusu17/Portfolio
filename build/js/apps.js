const comment = document.getElementById("Comment");
const email = document.getElementById("e-mail");
const submitBtn = document.getElementById("submitbtn");
const resetBtn = document.getElementById("resetbtn");

let year = document.getElementById("year");
let thisYear = new Date().getFullYear();
year.textContent = thisYear;

// function regards() {
//   alert("Thank you");
// }
// let mobileBtn = document.getElementById("mobile-btn");
// let closeBtn = document.getElementById("close-btn");
// let mobileMenu = document.getElementById("mobile-menu");

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

submitBtn.addEventListener("click", () => {
  let mail = email.value;
  let text = comment.value;
  if (mail.length > 0) {
    if (text.length <= 1) {
      alert("Kindly leave a comment ");
    } else {
      alert("Thank you for your comment");
    }
    console.log(mail);
    console.log(text.length);
  }
  setTimeout(clear(), 5000);
});

resetBtn.addEventListener("click", clear());

function clear() {
  email.value = " ";
  comment.value = " ";
}
// console.log(text);
// console.log(email);

document.addEventListener("DOMContentLoaded", initApp);

// function close() {
//   mobileMenu.style.display = "hidden";
// }
