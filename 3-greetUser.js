// Get the name from command-line arguments or 
// use "World" as default
const nameArg = capitalize(process.argv.slice(2).join(" ") || "World");

/**
 * Function to capitalize the first letter of each word in a string.
 * @param {string} str - The input string to capitalize.
 * @returns {string} - The capitalized string.
 */
function capitalize(str) {
    return str
        .trim() // Remove leading and trailing spaces
        .toLowerCase() // Convert entire string to lowercase
        .split(" ") // Split into an array of words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(" "); // Join words back into a string
}
