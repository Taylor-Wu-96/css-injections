const express = require('express');
const app = express();

// Define a port
const PORT = 9999;

// Route for the root URL
app.get('/', (req, res) => {
    console.log(req.query);
    res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
