function showMeny() {}

function regards() {
  alert("Thanks for your response");
}

const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
