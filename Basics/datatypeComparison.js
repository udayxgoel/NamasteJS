console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0); // always give false

console.log("2" == 2); // returns true convert to integer then compare
console.log("02" == 2); // returns true

// strict check we use ===
console.log("2" === 2); // returns false no conversion only original check
