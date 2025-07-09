if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a); Not defined
// console.log(b); Not defined
console.log(c); // 30 scope issue

function demo() {
  let name = "Uday Goel";
  function demo1() {
    console.log(name);
    let age = 18;
  }
  demo1();
  //   console.log(age); Not Defined
}

demo();

greetings();

function greetings() {
  console.log("Hello World");
}

const display = function () {
  console.log("HII");
};

display();
