const deduce = document.getElementById("deduce");
const blackmail = document.getElementById("blackmail");
const nothing = document.getElementById("nothing");

let currentSec = null;

deduce.addEventListener("click", () => {
  currentSec = "deduce";
  deduce.style.backgroundColor = "#F5853F";
  blackmail.style.backgroundColor = "white";
  nothing.style.backgroundColor = "white";
});

blackmail.addEventListener("click", () => {
  currentSec = "blackmail";
  deduce.style.backgroundColor = "white";
  blackmail.style.backgroundColor = "#F5853F";
  nothing.style.backgroundColor = "white";
});

nothing.addEventListener("click", () => {
  currentSec = "nothing";
  deduce.style.backgroundColor = "white";
  nothing.style.backgroundColor = "#F5853F";
  blackmail.style.backgroundColor = "white";
});

document.getElementById("solve").addEventListener("click", () => {
  if (currentSec === "deduce") {
    // send to gaurdian.html
    console.log("deduce");
    window.location.href = "gaurdianf.html";
  } else if (currentSec === "blackmail") {
    // send to gaurdian.html
    console.log("blackmail");
    window.location.href = "greed.html";
  } else if (currentSec === "nothing") {
    // send to gaurdian.html
    console.log("nothing");
    window.location.href = "neglect.html";
  }
});
