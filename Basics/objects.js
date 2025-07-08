// object declarations
const obj = {
  name: "Uday",
  age: 18,
  location: "Yamunanagar",
};

// to access values
// console.log(obj["name"]);
// console.log(obj.name);

const sym = Symbol("key1");
const student = {
  name: "Ram",
  age: 18,

  [sym]: "key1",
};

// console.log(student);
// console.log(typeof student[sym]);

student.greetings = function () {
  console.log("Hello, Good Morning");
};

student.greetings1 = function () {
  console.log(`Hello, Good Morning ${this.name}`);
};

// console.log(student);
// console.log(student.greetings());
// console.log(student.greetings1());
