// Stack(Premetive) and Heap(Non-Premetive)
// Premetive (Always pass by value) (copy)
let originalName = "Uday Goel";
let anotherName = originalName; // pass by value
anotherName = "Uday";

console.log(originalName); //returns Uday Goel
console.log(anotherName); // returns Uday

// Non - Premetive
let userOne = {
  email: "user@gmail.com",
  upi: "user@ybl",
};

let userTwo = userOne; // pass by reference
userTwo.email = "uday@gmail.com";

console.log(userOne.email); // returns uday@gmail.com
console.log(userTwo.email); // returns uday@gmail.com
