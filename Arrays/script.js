const arr = [1, 3, 5, 7, 9];
console.log(arr);

// array methods
// will not retur̥n any new array
// this will change the original form of arrays

//push
//add's new value to the last index
console.log("-----Push---------");
console.log("org", arr);
arr.push(11);
console.log("push", arr);

//pop
// remove an value from last index
console.log("-----Pop---------");
console.log("org", arr);
arr.pop();
console.log("POP", arr);

//unshift
// add a new value to the first index
console.log("-----Unshift---------");
console.log("org", arr);
arr.unshift(11);
console.log("Unshift", arr);

//shift
// remove an value from the first index
console.log("-----Shift---------");
console.log("org", arr);
arr.shift();
console.log("shift", arr);

//slice
// it will rerturn a new array not change org arr
//arr.(startindex, endindex)
//start index inclues of that value
//end index exclues oif thatr value

console.log("-----Slice---------");
console.log("org", arr);
//[1, 3, 5, 7, 9]->[3, 5, 7]
const slicedArr = arr.slice(1, 3);
console.log("sliced array", slicedArr);

//Splice
//arr.splice(startindex, deletCount, newele1, new2 ...)
// return a new arr and it will change the org
console.log("----Splice----");
console.log("org", arr);
const splicedArr = arr.splice(1, 2, "three", "five");
console.log("org", arr);
console.log("spliced arr", splicedArr);

//sorting
console.log("---sorting-----");
const array = [1, 6, 11, 2, 7, 8, 4];
const str = ["z", "a", "t"];
console.log("org", array);
console.log("org str", str);

array.sort((a, b) => a - b);
str.sort();
console.log("org sorted array asc", array);
console.log("org sorted string asc", str);

console.log("---sorting in decending-----");
array.sort((a, b) => a - b).reverse();
str.sort().reverse();
console.log("org sorted array desc", array);
console.log("org sorted string desc", str);

//Concat
//returns a new array
const sam_arr1 = [1, 3, 5, 7];
const sam_arr2 = [2, 4, 6, 8];
const conctedAr = sam_arr1.concat(sam_arr2);
console.log("concated array", conctedAr);

//MRF functions
const data = [
  {
    name: "Anandan",
    task: 70,
  },
  {
    name: "Sandhya",
    task: 50,
  },
  {
    name: "Kavitha",
    task: 41,
  },
  {
    name: "Mano",
    task: 72,
  },
];

const chain_data = [
  {
    name: "Anandan",
    task: 70,
  },
  {
    name: "Sandhya",
    task: 50,
  },
  {
    name: "Kavitha",
    task: 41,
  },
  {
    name: "Mano",
    task: 72,
  },
];

console.log("------Map-------");
// map -> we can iterater as well as returns a new array
const newMappedData = data.map((value, index, accArr) => {
  console.log(`
         stuentname : ${value.name}
         stuentTask : ${value.task}
         index : ${index}
      `);
  return (value.task += 5);
});

console.log(newMappedData);

//filter -> we can remove or filter elements in an array
console.log("------Filter-------");
const filterdArray = data.filter((value, index) => value.task >= 50);
console.log(data);
console.log(filterdArray);

//reduce -> reduce the array to single data

const reducedData = data.reduce((acc, val, index, accARR) => {
  return (acc += val.task);
}, 0);
console.log(reducedData);

//chaining of map filter and reduce
console.log("Chaning in MRF");

const TotalPassMarks = chain_data
  .map((val) => {
    val.task += 10;
    return val;
  })
  .filter((val) => {
    return val.task > 60;
  })
  .reduce((acc, val) => {
    return (acc += val.task);
  }, 0);

console.log(chain_data);
console.log(TotalPassMarks);

// Prototype of Map
console.log("-------Prototype of map-----");

Array.prototype.myMap = function (fn) {
  let returnableArr = [];
  for (let i = 0; i < this.length; i++) {
    returnableArr.push(fn(this[i], i, this));
  }

  return returnableArr;
};

const protoMap = data.myMap((value, index, accARR) => {
  console.log(`
          stuentname : ${value.name}
          stuentTask : ${value.task}
          index : ${index}
       `);
  return (value.task += 5);
});
console.log(protoMap);
