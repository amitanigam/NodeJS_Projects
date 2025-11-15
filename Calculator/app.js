const http = require('http');
const handlerPageModule = require('./calculator')

const server = http.createServer(handlerPageModule);

const PORT = 3004;
server.listen(PORT, () => {
    console.log(`Server running on address http:/localhost:${PORT}`)
})