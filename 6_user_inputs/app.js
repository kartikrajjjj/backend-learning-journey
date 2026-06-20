const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My server</title></head>");
    res.write("<body><h2>Enter Your Details: <br> The server from which this response is coming is created by Kartik</h2>");


    res.write('<form action="/submit" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"> <br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" />');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female" /> <br>');
    res.write('<input type="submit" value="Submit">');
    res.write("</form>");


    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/plain");
  res.write("Submitted.");
  res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
