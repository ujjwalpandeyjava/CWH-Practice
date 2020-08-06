/* // console.log('hello bro..')
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(` <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS Grid Autofit and MinMax </title>
  </head>
  <style>       
      .outer {
          margin: 30px;
          border: 1.5px dashed blue;
      }
  
      .outer2 {
          border: 1.5px dotted purple;
          margin: 20px;
      }
  
      .container {
          display: grid;
          padding: 15px;
          grid-gap: 1rem;
          grid-template-columns: 100px 100px 100px;
          justify-content: center;
          align-content: center;
  
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      }
  
      .box {
          background: rgb(255, 237, 133);
          border: 1px solid rgb(26, 26, 29);
          padding: 5px;
      }
  </style>
  
  <body>
  
      <div class="outer">
          <div class="outer2">
              <div class="container">
                  <div class="box">item-1</div>
                  <div class="box">item-2</div>
                  <div class="box">item-3</div>
                  <div class="box">item-4</div>
                  <div class="box">item-5</div>
                  <div class="box">item-6</div>
                  <div class="box">item-7</div>
                  <div class="box">item-8</div>
                  <div class="box">item-9</div>
                  <div class="box">item-10</div>
                  <div class="box">item-11</div>
                  <div class="box">item-12</div>
                  <div class="box">item-13</div>
                  <div class="box">item-14</div>
                  <div class="box">item-15</div>
                  <div class="box">item-16</div>
                  <div class="box">item-17</div>
                  <div class="box">item-18</div>
                  <div class="box">item-19</div>
                  <div class="box">item-20</div>
                  <div class="box">item-21</div>
                  <div class="box">item-22</div>
              </div>
          </div>
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

*/
/* //This is the code to createa a new server.......
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 

                OR
               
const http = require('http')
const fs = require('fs')
const fileContent = fs.readFileSync('externalFile.txt')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(fileContent)
})
server.listen(80, '127.0.0.1', () => { console.log("listinig on port 80.....") })//local host(127.0.0.1) port 80

            */