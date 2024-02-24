// console.log("HI");

const playBtn = document.getElementById("playButton");
const loadBar = document.getElementById("loadingBar");

playBtn.addEventListener("click", () => {
  const id = setInterval(load, 10);
  let width = 0;
  function load() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      loadBar.style.width = width + "%";
    }
  }
  setTimeout(openWeb, 1000);
});

function openWeb() {
  window.location.href = "game.html";
}
