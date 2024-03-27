import { Server } from "socket.io";
import { createServer } from "node:http";
import express from "express";

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log(socket.id);
});

app.get("*", (req, res) => {
  res.json({ test: "test" });
});

server.listen(3000, () => {
  console.log(" http://localhost:3000");
});
