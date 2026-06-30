const http = require("http");
const fs = require("fs/promises");

const server = http.createServer(async (req, res) => {
  console.log("1. Request Received");

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");

    res.write(`
      <html>
        <body>
          <h2>Event Loop Demo</h2>

          <form action="/submit" method="POST">
            <input
              type="text"
              name="username"
              placeholder="Enter Name"
            />
            <button type="submit">Submit</button>
          </form>
        </body>
      </html>
    `);

    return res.end();
  }

  if (req.url === "/submit" && req.method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      console.log("2. Receiving Chunk...");
      body.push(chunk);
    });

    req.on("end", async () => {
      console.log("3. All Chunks Received");

      const resultBody = Buffer.concat(body).toString();

      const params = new URLSearchParams(resultBody);
      const bodyObject = Object.fromEntries(params);

      console.log("4. Parsed Object:", bodyObject);

      console.log("5. Starting File Write...");

      await fs.writeFile(
        "user.txt",
        JSON.stringify(bodyObject, null, 2)
      );

      console.log("6. File Write Complete");

      res.setHeader("Content-Type", "text/plain");
      res.end("Data Saved Successfully");
    });

    return;
  }

  res.statusCode = 404;
  res.end("Page Not Found");
});

server.listen(3001, () => {
  console.log("Server Running at http://localhost:3001");
});