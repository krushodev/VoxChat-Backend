import { Server as ServerType } from "http";
import { Server } from "socket.io";
import { IMessage } from "./interfaces/socketInterfaces";

const createSocketServer = (server: ServerType) => {
    const socketServer = new Server(server!, {
        cors: {
            origin: "*"
        }
    });

    socketServer.on("connection", (socket) => {
        socket.on("sendMessage", (data: IMessage) => {
            socket.broadcast.emit("receiveMessages", data);
        });
    });

}

export default createSocketServer;