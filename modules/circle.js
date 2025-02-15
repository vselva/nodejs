// Define a constant for Pi
const PI = 3.14;

/**
 * Function to calculate the area of a circle.
 * @param {number} r - Radius of the circle
 * @returns {number} - Calculated area
 */
function calculateArea(r) {
    return PI * r * r;
}

/**
 * Function to calculate the circumference of a circle.
 * @param {number} r - Radius of the circle
 * @returns {number} - Calculated circumference
 */
function calculateCircumference(r) {
    return 2 * PI * r;
}

// Export the functions and constant
module.exports = {
    PI,
    calculateArea,
    calculateCircumference,
};
