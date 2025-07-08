console.log(Math); // Object

// Methods
console.log(Math.abs(-4)); // returns absulute value
console.log(Math.round(4.6));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.6));

// Most Important
console.log(Math.random()); // returns value between 0 to 1
console.log(Math.random() * 10 + 1); // returns value between 1 to 9
console.log(Math.floor(Math.random() * 10 + 1)); // removes decimals

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
