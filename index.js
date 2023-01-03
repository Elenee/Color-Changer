const colors = ["red","yellow","green","orange","cyan","pink","purple","brown"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let num = randomNum();
  document.body.style.backgroundColor = colors[num];
  color.textContent = colors[num];
});

function randomNum() {
    return Math.floor(Math.random() * colors.length);
}
