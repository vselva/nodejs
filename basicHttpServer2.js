// Import required modules
const http = require('http');
const url = require('url');

// Define the server port
const PORT = 3000;

// Function to handle responses
const sendResponse = (res, statusCode, content) => {
    res.writeHead(statusCode, { 'Content-Type': 'text/html' });
    res.write(content);
    res.end();
};

// Create an HTTP server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true); // Parse the URL

    console.log(`Received request: ${req.method} ${parsedUrl.pathname}`);

    // Route handling
    switch (parsedUrl.pathname) {
        case "/":
            sendResponse(res, 200, "<h1>🏠 Home Page</h1><p>Welcome to our website!</p>");
            break;
        case "/about":
            sendResponse(res, 200, "<h1>ℹ️ About Us</h1><p>We are learning Node.js!</p>");
            break;
        case "/contact":
            sendResponse(res, 200, "<h1>📞 Contact</h1><p>Email: contact@example.com</p>");
            break;
        default:
            sendResponse(res, 404, "<h1>❌ 404 Not Found</h1><p>Sorry, this page does not exist.</p>");
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log("Press Ctrl+C to stop the server.");
});
