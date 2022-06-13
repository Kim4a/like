const text = document.querySelector("#text");
const btn = document.querySelector(".btn");
const title = document.querySelector("#title");
const limit = document.querySelector(".limit");
const reset = document.querySelector(".reset");
const likeName = document.querySelector(".like");
const dislikeName = document.querySelector(".dislike");
const container = document.querySelector(".container_likes");

text.classList.add("container__text");
text.classList.add("text");

text.classList.forEach((el) => console.log(el));

btn.setAttribute("disabled", true);
btn.setAttribute("name", "button");
btn.setAttribute("type", "reset");
btn.setAttribute("id", "btn");

console.log(btn.getAttributeNode("disabled"));
console.log(btn.getAttributeNode("name"));
console.log(btn.getAttributeNode("id"));
console.log(btn.getAttribute("type"));

btn.removeAttribute("disabled");

console.log(btn.getAttributeNode("disabled"));

let count = 0;
let like = 0;
let dislike = 0;

let myArray = ["Max", "Konnor", "Kida", "Anya"];
let rand = Math.floor(Math.random() * myArray.length);
let rValue = myArray[rand];
console.log(rValue);

likeName.style.display = "none";
dislikeName.style.display = "none";

btn.addEventListener("click", function () {
  btn.children[0].classList.toggle("active");
  ++count;

  if (count % 2 == 0) {
    ++dislike;
    // container.addEventListener("click", () => {
    //   dislikeName.style.display = "block";
    // })
  } else {
    ++like;
    // container.addEventListener("clicker", () =>{
    //   likeName.style.display = "block";
    // })
  }
  console.log(like);
  console.log(dislike);

  if (count >= 10) {
    btn.setAttribute("disabled", true);
    limit.style.display = "block";
  }
});

reset.addEventListener("click", () => {
  btn.removeAttribute("disabled");
  limit.style.display = "none";
  count = 0;
});
