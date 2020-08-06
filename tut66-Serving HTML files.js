const http = require('http')
const fs = require('fs')
const fileContent = fs.readFileSync('tut56-Inserting values in the DOM.html')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(fileContent)
})
server.listen(80, '127.0.0.1', () => {
     console.log("\nlistinig on port 80.....\n search host number (127.0.0.1) on browser to see result. and 80 is also local.") 
     console.log("\nOR")
     console.log( '\nclick here:  \nhttp://127.0.0.1:80/ this will show the content of the readed file.')
    })

    /*This all can be preformed by express.js to simplify everthing.*/