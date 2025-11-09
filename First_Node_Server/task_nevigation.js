const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    if (req.url === '/home') {
        res.write('<h1>Welcome to Home Page !!<h1>')
        return res.end()
    } else if (req.url === '/men') {
        res.write('<h1>Welcome to Men Page !!<h1>')
        return res.end()
    } else if (req.url === '/women') {
        res.write('<h1>Welcome to Women Page !!<h1>')
        res.write('</html>')
        return res.end()
    } else if (req.url === '/kids') {
        res.write('<h1>Welcome to Kids Page !!<h1>')
        res.write('</html>')
        return res.end()
    } else if (req.url === '/cart') {
        res.write('<h1>Welcome to Cart Page !!<h1>')
        return res.end()
    }

    res.setHeader('content-type', 'text/html')
    res.write('<html>')
    res.write('<head> <title> Home Page </title> </head>')
    res.write('<bode>')
    res.write('<a href="/home"> Home </a> </br>')
    res.write('<a href="/men"> Men </a> </br>')
    res.write('<a href="/women"> Women </a> </br>')
    res.write('<a href="/kids"> Kids </a> </br>')
    res.write('<a href="/cart"> Cart </a> </br>')
    res.write('</bode>')
    res.write('</html>')
    return res.end()
})

const PORT = 3002
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

