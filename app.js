const error = document.querySelector(".error");
const providedDateEle = document.querySelector("#dob");

providedDateEle.addEventListener("change", getAge);
function getAge() {
  const providedDate = providedDateEle.value;
  if (providedDate) {
    error.style.display = "none";
    error.style.color = "red";
    const age = calcAge(providedDate);

    displayAge(...age);
  } else {
    error.style.display = "block";
    const years = document.getElementById("years");
    const months = document.getElementById("months");
    const days = document.getElementById("days");

    years.innerText = "";
    months.innerText = "";
    days.innerText = "";
  }
}

function calcAge(providedDate) {
  const age = [];
  var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const userDate = providedDate.split("-");
  const userYear = Number(userDate[0]);
  const userMonth = Number(userDate[1]);
  const userDay = Number(userDate[2]);

  const today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  if (userDay > day) {
    day = day + months[month - 1];
    month = month - 1;
  }
  if (userMonth > month) {
    month = month + 12;
    year = year - 1;
  }
  const d = day - userDay;
  const m = month - userMonth;
  const y = year - userYear;
  age.push(y);
  age.push(m);
  age.push(d);
  return age;
}

function displayAge(year, month, day) {
  const years = document.getElementById("years");
  const months = document.getElementById("months");
  const days = document.getElementById("days");

  years.innerText = "";
  months.innerText = "";
  days.innerText = "";

  const yearNode = document.createTextNode(year);
  const monthNode = document.createTextNode(month);
  const dayNode = document.createTextNode(day);

  years.appendChild(yearNode);
  months.appendChild(monthNode);
  days.appendChild(dayNode);

  years.style.color = "green";
  months.style.color = "yellow";
  days.style.color = "blue";
}
