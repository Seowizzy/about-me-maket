"use strict";

const NAME = document.getElementById("name");
const EMAIL = document.getElementById("email");
const MASSAGE = document.getElementById("massage");
const BUTTON = document.getElementById("button");
const FORM = document.getElementById("form");

BUTTON.addEventListener("click", (e) => {
  e.preventDefault();
  let AboutMe = {
    name: NAME.value,
    email: EMAIL.value,
    massage: MASSAGE.value,
  };
  console.log("AboutMe >> ", AboutMe);
});

FORM.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    let AboutMe = {
      name: NAME.value,
      email: EMAIL.value,
      massage: MASSAGE.value,
    };
    console.log("AboutMe >> ", AboutMe);
  }
});
