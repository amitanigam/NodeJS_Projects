

const sunRequestHandler = require('./sum')

const handlerPageModule = ((req, res) => {

    console.log(req.url, req.method);

    if (req.url === "/") {
        res.setHeader('content-Type', 'text/html');
        res.write(`
            <html>
            <head> <title> Practise Set </title> </head>
            <body>
                <h1>Welcome to Home Page !!</h1>
                <a href="/calculator"> Go to Calculator </a>
            </body>
            </html>
            `);
        return res.end()
    } else if (req.url === "/calculator" && req.method === 'GET') {
        const html = `
            <!doctype html>
            <html>
            <head><meta charset="utf-8"><title>Calculator</title></head>
            <body>
                <h1>Welcome to Calculator Page !!</h1>
                <form action="/calculate-result" method="POST">
                <input type="number" name="first" placeholder="First Number" required />
                <input type="number" name="second" placeholder="Second Number" required />
                <input type="submit" value="Sum" />
                </form>
            </body>
            </html>
        `;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(html);
    } else if (req.url.toString() === '/calculate-result' && req.method === "POST") {

        return sunRequestHandler(req, res);


    }

    res.setHeader('content-Type', 'text/html');
    res.write('<html>')
    res.write('<body>')
    res.write('<h1>404 Page not found !!</h1>')
    res.write('<a href="/calculator"> Go to Calculator page </a>')
    res.write('</body>')
    res.write('</html>')
    return res.end()

})

module.exports = handlerPageModule;