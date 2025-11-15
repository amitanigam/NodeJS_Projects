// Core Module
const path = require('path');

// External Module
const express = require('express');

// Local Module
const rootDir = require('../utils/pathUtil')

const homeRoute = express.Router();

homeRoute.get('/', (req, res) => {
    console.log('Handling / for GET', req.url, req.method)
    res.sendFile(path.join(rootDir, 'views', "home.html"))
})

module.exports = homeRoute;