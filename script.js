
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
