import { Server as ServerType } from 'http';
import { Server } from 'socket.io';
import type { MessageBody } from '../../shared/types/room';

const createSocketServer = (server: ServerType) => {
  const socketServer = new Server(server!, {
    cors: {
      origin: '*'
    }
  });

  socketServer.on('connection', socket => {
    socket.on('sendMessage', (data: MessageBody) => {
      socket.broadcast.emit('receiveMessages', data);
    });
    socket.on('createRoom', data => {
      socket.broadcast.emit('resolveNewRooms', data);
    });
  });
};

export default createSocketServer;
