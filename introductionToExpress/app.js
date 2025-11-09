// External Module
const express = require('express')

// Local Module
const userRequestHandler = require('./user')

// isme ab ham express ko call kar rahe hai aur ye bhi (req, res) leta hai.
const app = express();

app.use((req, res, next) => {
    console.log('Came in first middleware', req.url, req.method);
    next()
})

app.use((req, res, next) => {
    console.log('Came in second middleware', req.url, req.method)
    res.send("<p>Welcome to Complete coding Nodejs series</p>")
})

const PORT = 3006;

app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`)
});