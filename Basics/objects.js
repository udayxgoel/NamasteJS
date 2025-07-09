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

const obj4 = new Object();
console.log(typeof obj4);
obj4.name = "Uday Goel";
console.log(obj4.name);

const testObj1 = {
  1: "a",
  2: "b",
};

const testObj2 = {
  3: "a",
  4: "b",
};

const object3 = Object.assign({}, testObj1, testObj2);
// console.log(object3);

// console.log({ ...testObj1, ...testObj2 });

// console.log(Object.keys(testObj1));
// console.log(Object.values(testObj1));
