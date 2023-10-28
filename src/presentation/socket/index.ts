import { Server as ServerType } from 'http';
import { Server } from 'socket.io';

import type { MessageBody } from '../../shared/types/room';

const createSocketServer = (server: ServerType) => {
  let connectedUsers: string[] = [];

  const socketServer = new Server(server!, {
    cors: {
      origin: '*'
    }
  });

  socketServer.on('connection', socket => {
    socket.on('sendMessage', (data: MessageBody) => {
      socket.broadcast.emit('updateMessages', data);
    });
    socket.on('createRoom', data => {
      socket.broadcast.emit('updateRooms', data);
    });

    socket.on('saveConnection', data => {
      connectedUsers.push(data);
      socketServer.emit('updateConnections', connectedUsers);
    });

    socket.on('removeConnection', data => {
      connectedUsers = connectedUsers.filter(id => id !== data);
      socket.broadcast.emit('updateConnections', connectedUsers);
    });

    socket.on('getConnections', callback => {
      callback(connectedUsers);
    });
  });
};

export default createSocketServer;
