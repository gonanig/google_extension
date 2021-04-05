const loginPopup = document.querySelector(".loginbox");
const loader = document.querySelector(".loader");

window.addEventListener("load", function () {
  loader.classList.add("show");
  showPopup();
});

function showPopup() {
  const timer = setTimeout(function () {
    loader.classList.remove("show");
    loginPopup.classList.add("show");
  }, 1000);
}
