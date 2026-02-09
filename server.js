const express = require("express");

const app = express();

// Middleware (optional but good practice)
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
    res.send("Hello World! 🚀 Express Server is running");
});

// Another sample route
app.get("/about", (req, res) => {
    res.json({
        message: "This is the About route",
        status: "Success"
    });
});

// Define Port
const PORT = 3000;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
