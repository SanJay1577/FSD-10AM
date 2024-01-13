console.log("itertaives");
//const variables
const arr = ["IND", "CHN", "JPN"];
const obj = {
  IND: "India",
  CHN: "China",
  JPN: "Japan",
};
const my_string = "allstringdata";

//basic loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
//For Array
console.log("-----Basic Loop Arr------");
for (let i = 0; i < arr.length; i++) {
  console.log(`
          Value : ${arr[i]}
          Index : ${i}
          Acc-ARR : ${arr}
          `);
}

//for object
console.log("-----Basic Loop OBJ------");
const objKeys = Object.keys(obj);
const objValues = Object.values(obj);
const objEntries = Object.entries(obj);
console.log(objKeys);
console.log(objValues);
console.log(objEntries);

for (let i = 0; i < objValues.length; i++) {
  console.log(objValues[i]);
}

//For Each
// best arrays
console.log("-----For Each Loop Arr------");
// arrow function
//(value, index, accARR)=>{}
arr.forEach((val, idx, accARR) => {
  console.log(`
Value : ${val}
Index : ${idx}
Acc-ARR : ${accARR}
`);
});
console.log("-----For Each Loop Obj------");

// Task use it in obj
console.log(obj);
console.log(obj.IND);
console.log(obj["CHN"]);

objKeys.forEach((keys) => {
  console.log("Keys :", keys);
  console.log("Values :", obj[keys]);
});
// For in (best used for objects)
//console.log("-----For IN Loop Arr------");
console.log("-----For in Loop OBJ------");
for (key in obj) {
  console.log(`
  Key : ${key}
  Values : ${obj[key]}
  `);
}

console.log("-----For in Loop Arr------");
for (index in arr) {
  console.log(`
          Index : ${index}
          value : ${arr[index]}

          `);
}

// For of (best used for strings)
//console.log("-----For IN Loop string------");
const mystring_split = my_string.split("");
console.log(mystring_split);

for (str of my_string) {
  console.log(`string value - ${str}`);
}

console.log("-----For of Loop Arr------");
for (value of arr) {
  console.log(`Values- ${value}`);
}

console.log("-----For of Loop obj------");
for (objVal of objKeys) {
  console.log(`Object Values- ${objVal}`);
}

// Any loop can be used for all data types
//For-Each -> Array
//For In - > Object
// For of -> string
