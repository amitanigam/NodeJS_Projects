// Core Module
const path = require('path');

// External Module
const express = require('express');

// Local Moules
const rootDir = require('./utils/pathUtil')
const homeRoute = require('./routes/homeRouter')
const contactRoute = require('./routes/contactRouter')

const app = express();

app.use('/public', express.static(path.join(rootDir, 'public')));

app.use(express.urlencoded());

app.use(homeRoute)
app.use(contactRoute)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', "404.html"));
})

const PORT = 3007;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})