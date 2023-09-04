import { Server as ServerType } from "http";
import { Server } from "socket.io";

const createSocketServer = (server: ServerType) => {
    const socketServer = new Server(server!, {
        cors: {
            origin: "*"
        }
    });

    socketServer.on("connection", (socket) => {
        socket.on("sendMessage", data => {
            socket.emit("newMessage", data);
        });
    });

}

export default createSocketServer;