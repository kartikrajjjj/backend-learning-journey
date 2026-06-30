const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url , req.method , req.headers);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My server</title></head>');
    res.write('<body><h2>Learning Backend->Node.js</h2></body>');
    res.write('<body><p>The server from which this response is coming is created by Kartik</p></body>');
    res.write('</html>');
    res.end();
});

const PORT=3001;
server.listen(PORT,()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
});