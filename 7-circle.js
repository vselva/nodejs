// Import the circle module
const circle = require('./modules/circle');

// Define a radius value
const radius = 5;

// Display the results
console.log(`🟢 Value of PI: ${circle.PI}`);
console.log(`🟢 Area of a circle with radius ${radius}: ${circle.calculateArea(radius)}`);
console.log(`🟢 Circumference of a circle with radius ${radius}: ${circle.calculateCircumference(radius)}`);
