// //var let and const
// //posiible in let and var
// let a = 15;
// a = 30;
// console.log(a);
// // possible only in var
// var b = 25;
// var b = 35;
// console.log(b);
// //cannot do in const
// const c = 20;
// c = 35;
// console.log(c);

//block scopes
if (true) {
  let manoData = "Manoj 55";
  console.log(manoData);
  //console.log(sanjayData); not posiible
  //console.log(kavithaData); in to out
  if (true) {
    let sanjayData = "Sanjay 565";
    console.log(manoData);
    console.log(sanjayData);
    //console.log(kavithaData); inner to outer
    if (true) {
      let kavithaData = "Kavitha 654";
      console.log(manoData);
      console.log(sanjayData);
      console.log(kavithaData);
    }
  }
}

const data = {
  123151: "sanjay",
  type: "Savings",
};

// try to use in an function

function getBankAccoutName() {
  let nameOfAcc = "XXX";

  if (true) {
    //let nameOfAcc = "XXX";
    nameOfAcc = data[123151];
  }
  console.log(nameOfAcc); // outer layer
}
getBankAccoutName();
// console.log(nameOfAcc) // not accessible

// shadowing in scoping
if (true) {
  const studentname = "xyz"; //vcda51fs
  if (true) {
    const studentname = "zxy"; //bfdag5431
    console.log("Inner -", studentname);
  }
  console.log("Outter - ", studentname);
}

//Template literals

const Men_Name = "Sanjay";
const Men_SUB = "FSD-MERN";
console.log(
  "Mentor name is " +
    Men_Name +
    " Mentor Subjects are " +
    Men_SUB +
    "Options of type is" +
    data.type
);

console.log(
  `Mentor Name is ${Men_Name}
Mentor Subject is ${Men_SUB}
Options of type is ${data.type}
`
);

// spread and rest operator
const stackCollection = ["HTML", "CSS", "JS", "React", "NodeJS"];
//console.log(stackCollection);
//spread operator
//console.log(...stackCollection);
// rest in parameters
function getAllFrontEndStacks(stack1, stack2, stack3, stack4, ...rest) {
  console.log(stack1);
  console.log(stack2);
  console.log(stack3);
  console.log(stack4);
  console.log("Backend", rest);
}

const FrontEndStack = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "MonGoDB",
  "Nodejs",
  "Express",
];
//......FrontEndStack ->  spread -> Html, css, js , react
//getAllFrontEndStacks("html", "css", "js", "react");
//spread in arguments
getAllFrontEndStacks(...FrontEndStack);

// use cases of spread operator
let org_arr = ["sanjay", "manoj"];
let dup_arr = [...org_arr, "deepan1"]; // "sanjay", "manoj"
console.log("org-arr", org_arr);
console.log("dup-arr", dup_arr);
dup_arr[0] = "usha";
dup_arr.push("deepan2");
console.log("org-arr", org_arr);
console.log("dup-arr", dup_arr);

const cus_name = "Manoj";
const acc_type = "Salaried";
const Exipry_year = "2027";

//object property short hand
const bankAcc = {
  cus_name,
  acc_type,
  exipry_year: Exipry_year,
};

console.log(bankAcc);

// Destructuring
const stuc_arr = ["sanjay", "manoj", "kavitha"];
//desrtucture the array
const [first_name, , third_name] = stuc_arr;
function getStudentName(name) {
  console.log(name);
}

getStudentName(first_name);
getStudentName(third_name);

// object destructuring

const mentorObj = {
  men_name: "Sanjay",
  men_pos: "Mentor",
  men_company: "GUVI",
};
//destructure the object
//renamiong in object key while destructuting.
let { men_pos, men_company: company } = mentorObj;
console.log(men_pos);
console.log(company);
