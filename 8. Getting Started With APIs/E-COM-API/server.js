// 1. Import Express
import express from "express";

// 2. Create Server
const server = express();

// 3. Default request handler
server.get("/", (req, res) => {
  res.send("Welcome to ecommerce APIs");
});

// 4. Specify Port
server.listen(3200, () => {
  console.log("Listening on port 3200");
});
