"use strict";

function changeContent(index) {
  let sections = document.querySelectorAll("section");
  let images = document.querySelectorAll("img");
  let buttons = document.querySelectorAll("button");

  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove("display");
    sections[i].classList.remove("transform");
    images[i].classList.remove("opacity");
    buttons[i].classList.remove("active");
  }
  let element = document.querySelectorAll("section")[index];
  element.classList.add("display");
  buttons[index].classList.add("active");

  setTimeout(function () {
    element.classList.add("transform");
  }, 100);
}
