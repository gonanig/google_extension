init();

async function init() {
  let data = document.querySelector(".member-name");
  let userData = data.querySelector("span:first-child").innerText;
  console.log(userData);
  data.querySelector(
    "span:first-child"
  ).innerText = `${userData} Just for test`;
}
