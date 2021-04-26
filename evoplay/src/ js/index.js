const counter = document.querySelector(".hero-text");

let getCounter = () => {
  let count = 0;
  setInterval(function () {
    count++;
    counter.innerHTML = `${count}+ sport events`;
    if (count === 100) {
      count = 0;
    }
  }, 1000);
};
document.addEventListener("DOMContentLoaded", () => getCounter());
