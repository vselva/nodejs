// Local Modules

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const remainder = (a, b) => a % b;

module.exports=add;

module.exports = {
    add: add, 
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    remainder: remainder
}