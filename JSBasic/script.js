//copy by value
var a = 15;
var b = a;
console.log(a);
console.log(b);
b = 20;
console.log(a); //15
console.log(b); //20

//copy by reference
var arr = [10, 20, 30];
var brr = arr;
console.log(arr);
console.log(brr);
brr[0] = 20;
console.log(arr);
console.log(brr);

//deep copy
var ar = [25, 50, 75];
var br = ar;
console.log(ar);
console.log(br);
br = [50, 25, 75];
console.log(ar); //[25, 50, 75]
console.log(br); //[50, 25, 75]

//object
const obj = {
  name: "sanjay",
};

console.log(obj);
console.log(obj.name);

console.log(window);
console.log(a);
console.log(window.a);
console.log(document);

const nestObj = [
  {
    class: "FSD",
    studend: [
      {
        name: "siva",
        stack: [
          "html",
          "css",
          {
            js: ["react", " angular"],
          },
        ],
      },
      {
        name: "chandru",
        stack: [
          "html",
          "css",
          {
            js: ["vue", " react"],
          },
        ],
      },
    ],
  },
];
console.log(nestObj[0].studend[0].stack[2].js[0]);
console.log(nestObj[0].studend[1].stack[2].js[0]);

const demoArr = [10, "Sanjay", true, 16.87, [0, 2], { name: "san" }];
const demoObj = {
  num: 10,
  name: "sanjay",
  bool: true,
  float: 16.87,
  arr: [0, 2],
  obj: {
    name: "Sanj",
  },
};

///xml http request//

let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  const data = JSON.parse(xhr.response);
  console.log(data);
};

const sampledata = [
  {
    mentor: "sanjay",
  },
];
const stringdata = JSON.stringify(sampledata);
console.log(stringdata);
const convberted = JSON.parse(stringdata);
console.log(convberted);
