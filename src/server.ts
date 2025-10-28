import http from "http";

const server = http.createServer(
  (request: http.IncomingMessage, response: http.ServerResponse) => {
    if (request.url === "/home" && request.method === "GET") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end("<h1>Home</h1>");
      return;
    }

    if (request.url === "/about" && request.method === "GET") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end("<h1>About</h1>");
      return;
    }

    if (request.url === "/my-account" && request.method === "GET") {
      response.writeHead(403, { "Content-Type": "text/plain" });
      response.end("You have no access to this page");
      return;
    }

    response.writeHead(404, { "content-type": "text/plain" });
    response.end("Page not found");
    return;
  },
);

server.listen(3031, () => {
  console.log(`Server is running on port 3031...`);
});
