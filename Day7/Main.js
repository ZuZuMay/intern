const User = require('./User.js'); // No .js extension needed in Node.js
const { add, subtract, Calculator } = require('./MultipleCommonJS.js');

console.log(add(2, 3));            // 5
console.log(subtract(5, 2));       // 3

const calc = new Calculator();
console.log(calc.multiply(3, 4));  // 12
const user1 = new User('Bob');
console.log(user1.name); // Should print: Bob