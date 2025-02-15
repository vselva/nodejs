// Node.js script to display command-line arguments in a structured way
console.log("========== Command-line Arguments ==========");

// Extract user-provided arguments (ignoring Node binary and script path)
const args = process.argv.slice(2);

if(args.length === 0) {
    console.log("No arguments provided.");
} else {
    for(let i = 0; i < args.length; i++) {
        console.log(`args[${i}]: ${args[i]}`);
    }
}
