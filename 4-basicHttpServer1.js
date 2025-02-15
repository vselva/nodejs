// Import the built-in 'http' module
const http = require("http");

// Define the server port
const PORT = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Log the request method and URL
    console.log(`Received ${req.method} request for: ${req.url}`);

    // Set HTTP response headers
    res.statusCode = 200; // Status 200 means OK
    res.setHeader("Content-Type", "text/plain"); // Plain text response
    res.end("Welcome to My First Node.js Server!");
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log("Press Ctrl+C to stop the server.");
});
