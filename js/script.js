//Question 1

function nonsense(word) {
  console.log("What the func is this nonsense");
}

nonsense();

//Question 2

function fullName(firstName, lastName) {
  console.log(firstName + " " + lastName);
}

fullName("Bob", "Dog");

//Question 3

function totalNumber(firstNumber, lastNumber) {
  var typeofFirst = typeof firstNumber;
  var typeofLast = typeof lastNumber;

  if (typeofFirst !== "number" || typeofLast !== "number") {
    return "Please supply number values";
  }
  //  else {
  //    console.log("Please supply number values")
  //  }

  return firstNumber * lastNumber;
}

var result = totalNumber("three", 1000);
console.log(result);

//Need answer - corrected

//---------------

//Question 4

function threeArguments(one, two, three) {
  var convertedOne = parseFloat(one);
  var convertedTwo = parseFloat(two);
  var convertedThree = parseFloat(three);

  if (isNaN(convertedOne) || isNaN(convertedTwo) || isNaN(convertedThree)) {
    return "Invalid argument types";
  }

  return convertedOne + convertedTwo + convertedThree;
}

var result = threeArguments(1, 2, 3);
console.log(result);
//threeArguments();

var paragraph = document.querySelector("p");

paragraph.innerHTML = result;

//Need answer - corrected

//----------------

//Question 5

var headingButton = document.querySelector(".heading");
var h1 = document.querySelector("h1");

function changeHeading() {
  h1.innerHTML += ": Updated";
}

headingButton.onclick = changeHeading;

//Question 6

var titleButton = document.querySelector(".title");
var title = document.querySelector("title");
//var body = document.querySelector(HTMLtitleElement);
console.dir(document);

function changeTitle() {
  document.title = "I've been updated";
}

titleButton.onclick = changeTitle;

//Need answer - corrected

//-----------

//Question 7

var redButton = document.querySelector(".red");
var orangeButton = document.querySelector(".orange");
var pinkButton = document.querySelector(".pink");
var body = document.querySelector("body");

function changeRed() {
  body.style.backgroundColor = "red";
}
redButton.onclick = changeRed;

function changeOrange() {
  body.style.backgroundColor = "orange";
}
orangeButton.onclick = changeOrange;

function changePink() {
  body.style.backgroundColor = "pink";
}
pinkButton.onclick = changePink;

//OR

// Question 7
var redButton = document.querySelector(".red");
var orangeButton = document.querySelector(".orange");
var pinkButton = document.querySelector(".pink");

// this function will be called by the other functions
function changeBackground(colour) {
  document.body.style.backgroundColor = colour;
}

redButton.onclick = function () {
  changeBackground("red");
};

orangeButton.onclick = function () {
  changeBackground("orange");
};

pinkButton.onclick = function () {
  changeBackground("pink");
};
