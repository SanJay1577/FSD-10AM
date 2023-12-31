//hositing
console.log(a); //220, 600, 700
var a = 15; //976
console.log(a);

//let and const
//console.log(b); -> referenmce error
const b = 25;
console.log(b);

// functions (first citizens)
//function declaration

sayMyName();
function sayMyName() {
  console.log(a);
  var a = 30;
  var b = 10;
  console.log(a + b); //40
}

// arguments and parameters in function
function sumOfTwo(num1, num2) {
  // num1 & num2 -> paramters
  const value = num1 + num2; //5+10-> 15
  console.log("Value of the sum", value);
}
//arguments (5, 10)
sumOfTwo(5, 10);

sumOfTwo(10, 25);

//make returnable function
function multipleOfThree(num) {
  const value = num * 3; //9
  return value; //9
}

const result = 10 * multipleOfThree(3); // 10 *9
console.log(result);

// types of first class function
// which the returns the paramter
function getName(name) {
  return name;
}
console.log(getName("Sanjay"));

//executable function
function menJob() {
  console.log("My job is mentor");
}

function myData(name, fn) {
  console.log("My name is", name);
  fn(); //menjob();
}
myData("sanjay", menJob);

// anonymous function
let anFunc = function (name) {
  console.log("i'm an anonymous function", name);
};
anFunc("sanjay");

//arrow function
// scope brakcets are not need in sigle line of execution
const arrFunc = (num1, num2) => {
  console.log("add", num1 + num2);
  console.log("mul", num1 * num2);
};
arrFunc(15, 10);

// returnable arrow function if single line
const retArrFunc = (param) => param;
console.log(retArrFunc("vidhya"));

let value = "FSD";
console.log("Before IIFE", value);

// IIFE
(function changeLowerCase() {
  let lower_value = value.toLocaleLowerCase();
  value = lower_value;
  console.log("value changed to lower case");
})();
console.log("After IIFE", value);

const printOdd = function (arr) {
  console.log("-----Anonymous----");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};
printOdd([1, 3, 5, 2, 4, 6, 9]);

(function printOddInIIFE(arr) {
  console.log("-----IIFE----");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})([1, 3, 5, 2, 4, 6, 9]);

const arrPrintOdd = (arr) => {
  console.log("-----Arrow----");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};
arrPrintOdd([1, 3, 5, 2, 4, 6, 9]);
