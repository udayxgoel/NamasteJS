// string declarations
const name = "Uday Goel";
const strName = new String("Ram");

// string concatinations
console.log(name + strName + "value"); // not a good way
console.log(`hello my name is ${name}`); // we always use template literals

// string methods
console.log(name.length);
console.log(name.at(5)); // do not count blank spaces
