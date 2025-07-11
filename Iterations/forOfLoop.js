// for of

const arr = [1, 2, 3, 4, 5, 6];

for (i of arr) {
  //   console.log(i);
}

const msg = "Hello World";

for (i of msg) {
  //   console.log(i);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("EU", "Europe");

// console.log(map);

for (let [key, value] of map) {
  //   console.log(key + " " + value);
}

const myObj = {
  name: "Uday",
  age: 18,
  location: "Yamunanagar",
};

// for (let [key, value] of myObj) {
//   console.log(key, value);
// }
