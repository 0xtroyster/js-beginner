
console.log("JavaScript loaded");

let userName = "Student";
let age = 20;

console.log(userName, age);

function greet(name) {
  return "Hello, " + name;
}

console.log(greet(userName));

function isAdult(age) {
  if (age >= 18) {
    return true;
  }
  return false;
}

console.log(isAdult(age));

let hobbies = ["reading", "coding", "music"];

console.log(hobbies);
console.log(hobbies[0]);

const title = document.getElementById("title");
title.textContent = "JavaScript Beginner Practice";

const clickButton = document.getElementById("clickBtn");
console.log(clickButton);

clickButton.addEventListener("click", function () {
  console.log("Button clicked");
});

function handleButtonClick() {
  console.log("Button clicked");
}

clickButton.addEventListener("click", handleButtonClick);

const message = document.getElementById("message");

function handleButtonClick() {
  message.textContent = "Button was clicked";
}



