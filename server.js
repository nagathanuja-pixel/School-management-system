const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.get("/api/status", function(req, res) {
    res.json({
        message: "School Management System is running"
    });
});

app.listen(PORT, function() {
    console.log(`Server running at http://localhost:${PORT}`);
});
