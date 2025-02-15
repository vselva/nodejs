// =======================================
// 🚀 1. Introduction to Node.js
// =======================================
console.log("=================================");
console.log("🚀 Welcome to Node.js!");
console.log("=================================");

// Display Node.js version
console.log(`Node.js Version: ${process.version}`);

// Display the execution timestamp
console.log(`Execution Time: ${new Date().toLocaleString()}`);

// =======================================
// 📌 2. Running JavaScript with Node.js
// =======================================
console.log("\n📌 Running JavaScript directly in Node.js!");
console.log("Try running this file using: node node_basics.js");

// =======================================
// 📌 3. Using Built-in Modules
// =======================================
const os = require("os");

console.log("\n📌 System Information using Built-in Modules:");
console.log(`System Architecture: ${os.arch()}`);
console.log(`Total Memory: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
