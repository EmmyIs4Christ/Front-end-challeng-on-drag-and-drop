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

allGragabbles.forEach((dragabble) => {
    dragabble.addEventListener("dragstart", function () {
      dragabble.classList.add("dragging");
    });
  
    dragabble.addEventListener("dragend", function () {
      dragabble.classList.remove("dragging");
  
      //activating and removing the drop notification
      message.classList.remove("hide-message");
      const myTimer = setTimeout(() => {
          message.classList.add("hide-message");
          clearTimeout(myTimer);
      },
        1000
      );
    });
  });
  
  //handling the container boxes
  containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
      e.preventDefault();
  
      let dragabble = document.querySelector(".dragging");
      container.appendChild(dragabble);
    });
  });
  