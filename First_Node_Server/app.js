const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if (req.url === '/') {
        res.setHeader('content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Node Coding</title></head>')
        res.write('<body><h1>Welcome to Home !!</h1></body>')
        res.write('</html>')
        return res.end()

    } else if (req.url === '/products') {
        res.setHeader('content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Node Coding</title></head>')
        res.write('<body><h1>Welcome to Product !!</h1></body>')
        res.write('</html>')
        return res.end()
    }

    res.setHeader('content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>Node Coding</title></head>')
    res.write('<body><h1>I am Full-Stack Developer!!</h1></body>')
    res.write('<html>')
    res.write('</html>')
    res.end()
    // process.exit();
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`)
});