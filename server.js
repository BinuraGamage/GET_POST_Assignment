const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// variable to store username
let storedUsername = "";

// POST request
app.post("/api/user", (req, res) => {

    const { username } = req.body;

    if(!username || username.trim() === ""){
        return res.status(400).json({
            message: "Username is required"
        });
    }

    storedUsername = username; // store username

    res.json({
        message: "Username stored"
    });
});

// GET request
app.get("/api/user", (req, res) => {

    res.json({
        username: storedUsername
    });

});

// app.get("/", (req, res) => {
//     res.text
//     (
//          "Welcome to the User API"
//     );
// });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});