// Immediately Invoked Function Expressions (IIFE)

(function display(name) {
  // named iife
  console.log("Hello World", name);
})("Uday");

((name) => {
  // unnamed iife
  console.log("Hello World 2", name);
})("Uday");
