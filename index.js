const express = require('express');
const app = express();

let users = [
    { "username": "user1", "password": "123" },
    { "username": "user2", "password": "321" },
    { "username": "user3", "password": "888" }
]

app.get("/users", (req, res) => {
    return res.status(200).json({ data: users })
})

app.get("/user/:userName", (req, res) => {
    if(users.findIndex(x => x.username == req.params.userName) < 0) {
        res.status(200).json({ message: "User info not found.", data: null })
    } else {
        res.status(200).json({ message: "User info.", data: req.params.userName })
    }
})

app.delete("/user/:userName", (req, res) => {
    if(users.findIndex(x => x.username == req.params.userName) < 0) {
        res.status(200).json({ message: "User not found.", data: null })
    } else {
        res.status(200).json({ message: "User deleted.", data: req.params.userName })
    }
})

app.listen(5000, () => {
    console.log('Server running on port: 5000')
})