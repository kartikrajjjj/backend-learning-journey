const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My server</title></head>");
    res.write("<body><h2>This is home page</h2></body>");
    res.write("<body><p>You can change URL to http://localhost:3001/products");
    res.write(
      "<body><p>The server from which this response is coming is created by Kartik</p></body>",
    );
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My server</title></head>");
    res.write("<body><h2>Products will be shown here</h2></body>");
    res.write(
      "<body><p>The server from which this response is coming is created by Kartik</p></body>",
    );
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My server</title></head>");
  res.write(
    "<body><h2>If router request is anything else from ./home or ./products</h2></body>",
  );
  res.write(
    "<body><p>The server from which this response is coming is created by Kartik</p></body>",
  );
  res.write("</html>");
  res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
