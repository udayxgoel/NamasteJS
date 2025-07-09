// function declaration
function display() {
  console.log("Hello World");
}

display();

// Rest Operator
function getCartItems(...items) {
  return items;
}

console.log(getCartItems(45, 45, 566, 355, 42));
