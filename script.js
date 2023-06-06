/* selecting HTML elements */
const allGragabbles = document.querySelectorAll(".draggable");

const containers = document.querySelectorAll(".container");
const firstCont = document.querySelector(".firstcont");
const secondCont = document.querySelector(".secondcont");
const elementInner = document.querySelector("#innerHtml").innerHTML;
const btn = document.querySelector(".btn");
const message = document.querySelector(".message");

const p1 = document.querySelectorAll(".firstcont p");

// FUNCTIONALITY FOR RE-INITIALIZING BOX CONTENTS
btn.addEventListener("click", function () {
  const firstCont = document.querySelector(".firstcont");

  secondCont.innerHTML = "";
  firstCont.innerHTML = "";

  p1.forEach((el) => {
    firstCont.appendChild(el);
  });
});
