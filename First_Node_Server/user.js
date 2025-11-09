const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    if (req.url === '/user') {
        res.setHeader('content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Node Coding</title></head>')
        res.write('<body><h1>Enter Your Details:</h1>')
        res.write('<form action="/submit-details" method="POST">')
        res.write('<input type="text" name="username" placeholder="Enter your name" /> <br>')
        res.write('<label for="male">Male</label>')
        res.write('<input type="radio" id="male" name="gender" value="male">  <br>')
        res.write('<label for="female">Female</label>')
        res.write('<input type="radio" id="female" name="gender" value="female">  <br>')
        res.write('<input type="submit" value="Submit">')
        res.write('</form>')
        res.write('</body>')
        res.write('<html>')
        res.write('</html>')
        return res.end()
    } else if (req.url.toLowerCase() === '/submit-details' && req.method === 'POST') {

        // ab ham kya kar rahe hai? ham data ko chunk main bhej rahe hai with below function 
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        })

        // ab chunk ko ham body var main add karenge matlab full data get rahe hai with body var
        req.on('end', () => {
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);

            const params = new URLSearchParams(fullBody);

            const bodyObject = {};
            for (const [key, val] of params.entries()) {
                bodyObject[key] = val;
            }

            // const bodyObject = Object.fromEntries(params)
            console.log(bodyObject);
            fs.writeFileSync("userDetails.txt", JSON.stringify(bodyObject))
        })

        res.statusCode = 302;
        res.setHeader('Location', '/')
    }

    res.setHeader('content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Node Coding</title></head>')
    res.write('<body><h1>Welcome Home Page !!</h1></body>')
    res.write('<html>')
    res.write('</html>')
    return res.end()
});

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Server running on address http:/localhost:${PORT}`)
})