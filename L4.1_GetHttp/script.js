const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });

    if (request.method === "GET") {
        if (request.url === '/')
            response.write("you are in index.");
        else if (request.url === '/contact')
            response.write("you are in contact.");
        else
            response.write("page not found.");
    }

    response.end();
});

server.listen(3000);