const http = require('http')
const os = require('os')

const message = "Hello World\n"
const port = 8080


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end(message)
});

server.listen(port, os, () => {
    console.log(`Server running at http://${os.hostname()}:${port}/`)
})