const math = require('./modules/math');

console.log("Performing Mathematical Operations:");

const sum = math.add(2, 3);
console.log("Addition (2 + 3) =", sum);

const difference = math.subtract(5, 2);
console.log("Subtraction (5 - 2) =", difference);

const product = math.multiply(5, 2);
console.log("Multiplication (5 * 2) =", product);

const quotient = math.divide(5, 2);
console.log("Division (5 ÷ 2) =", quotient);

const remainder = math.remainder(5, 2);
console.log("Remainder (5 % 2) =", remainder);