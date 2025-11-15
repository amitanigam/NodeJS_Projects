// Core Module
const path = require('path');

// External Module
const express = require('express');

// Local Module
const rootDir = require('../utils/pathUtil')

const contactRoute = express.Router();

contactRoute.get('/contact-us', (req, res) => {
    console.log('Handling Contact Us for GET', req.url, req.method)
    res.sendFile(path.join(rootDir, 'views', "contactUs.html"))
})

contactRoute.post('/contact-us', (req, res) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', "contactSuccess.html"))
})

module.exports = contactRoute;