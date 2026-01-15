import { WebSocketServer } from "ws";
import { prismaClient } from "db/client";

const wss = new WebSocketServer({ host:"ws", port:8080 });

wss.on("connection", (ws) => {
  ws.on("message", async (message) => {
    await prismaClient.user.create({
      data: {
        username: Math.random().toString(),
        password: Math.random().toString(),
      },
    });

    ws.send(message.toString());
  });
});

