const user = {
  username: "Uday Goel",
  age: 18,
  welcomeMsg: function () {
    console.log(this.username);
    console.log(this);
  },
};

// user.welcomeMsg();
// user.username = "sam";
// user.welcomeMsg();

console.log(this);

// this in functions
function demo1() {
  let name = "Uday";
  console.log(this.name);
}

// demo1();

const demo2 = function () {
  let name = "Uday";
  console.log(this.name);
};

// demo2();

const demo3 = () => {
  let name = "Uday";
  console.log(this.name);
};

// demo3();

// const add = (a, b) => a + b;
// const add = (a, b) => {
//   return a + b;
// };
