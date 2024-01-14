//Factory functions
//return an object
function signUpStudent(name, batch, age, edu) {
  return {
    stud_name: name,
    stud_batch: batch,
    stud_age: age,
    stud_edu: edu,
    getStudentDesc() {
      console.log(`
         Student Name is ${name}
         Student Batch is ${batch}
         Student age is ${age}
         Student edu is ${edu}
         `);
    },
    getbatch() {
      console.log(`Student Batch is ${batch}`);
    },
  };
}

const mukesh = signUpStudent("Muskesh", "FSD-55", 22, "B.TECH");
console.log(mukesh);
mukesh.getStudentDesc();
mukesh.getbatch();

const sathya = signUpStudent("Sathya", "FSD-55", 21, "BSC");
console.log(sathya);
sathya.getStudentDesc();
sathya.getbatch();

// This keyword
var prop_name = "window parent";
console.log(window.prop_name);
console.log(this.prop_name);

const grandFatherObj = {
  prop_name: "grandfather",
  getDetails() {
    console.log(this.prop_name);
  },
  fatherObj: {
    prop_name: "father",
    getDetails() {
      console.log(this.prop_name);
    },
    getPropName: () => {
      //targets global obj
      console.log(this.prop_name);
    },
    // converting arrow functo target immeidtae parent
    getParentProp() {
      const inArrow = () => {
        //targets immediate parent
        console.log(this.prop_name);
      };
      inArrow();
    },
  },
};

grandFatherObj.fatherObj.getPropName();
grandFatherObj.fatherObj.getParentProp();

// // Constructor functions
// // {} -> this
function Student(name, batch, age, edu) {
  this.stud_name = name;
  this.stud_batch = `${batch} GUVI`;
  this.stud_age = age;
  this.stud_edu = edu;
  this.getDetails = function () {
    console.log(`
         Student Name is ${this.stud_name}
         Student Batch is ${this.stud_batch}
         Student age is ${this.stud_age}
         Student edu is ${this.stud_edu}
         `);
  };
}

// Prototypes
Student.prototype.changeName = function (name) {
  this.stud_name = name;
  console.log("name changed");
};

const selva = new Student("Selva", "FSD-54", "22", "B.COM");
console.log(selva);
selva.changeName("selvanayagan");
console.log(selva);

// class - OOPS
//4 pillars -> Abilities
// Inheritance
// Abstraction
// encapsulation - done
// ploymorphism

class StudentData {
  // encapsulation
  constructor(name, age, education, batch) {
    this.student_name = name;
    this.student_age = age;
    this.student_education = education;
    this.student_batch = batch;
  }
  // Bussiness logic and methods
  getDetails() {
    console.log(`
          Student Name is ${this.student_name}
         Student Batch is ${this.student_batch}
         Student age is ${this.student_age}
         Student edu is ${this.student_education}
          `);
  }
}

//inheritance
class StudentCLassDetails extends StudentData {
  constructor(name, age, education, batch, task, projects, attendence) {
    super(name, age, education, batch);
    this.completed_task = task;
    this.completed_project = projects;
    this.student_class_attended = attendence;
  }
  //setting completed task
  setCompletedTask(data) {
    this.completed_task = data;
  }
  setCompletedProject(data) {
    this.completed_project = data;
  }
  makeAttendence() {
    this.student_class_attended++;
  }
  //abstarction
  getTaskPercentage() {
    const percentage = (this.completed_task / 20) * 100;
    console.log(`${percentage}%`);
  }

  //polymorphism
  getTaskDetails() {
    console.log(`You have completed ${this.completed_task}`);
  }
}

const raj = new StudentCLassDetails("raj", 21, "B.E", "FSD-55", 0, 0, 0);

console.log(raj);
raj.getDetails();
console.log(raj.completed_task);
raj.setCompletedTask(2);
raj.makeAttendence();
console.log(raj);
console.log(raj.completed_task);
raj.getTaskPercentage();
raj.getTaskDetails();
