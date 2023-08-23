// const endDate = "23 March 2022 10:00 PM";

// document.getElementById("end-date").innerText = endDate;

// function clock() {
//   const end = new Date(endDate);
//   const now = new Date();
//   //console.log(end, now);
//   const diff = (end - now) / 1000;
//   console.log(diff);
//   // convert into days
//   console.log(Math.floor(diff / 3600 / 24));
// }

// // initial call
// clock();

const endDate = "27 July 2022 08:20:00 PM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");
// const clock = () => {

// }

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;

  if (diff < 0) return;

  // convert into days;
  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor(diff / 3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff) % 60;
}

// initial call
clock();

setInterval(() => {
  clock();
}, 1000);
