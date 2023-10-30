import { Server as ServerType } from 'http';
import { Server } from 'socket.io';

import type { MessageBody, RoomBody } from '../../shared/types/room';

const createSocketServer = (server: ServerType) => {
  const socketServer = new Server(server!, {
    cors: {
      origin: '*'
    }
  });

  const connectedUsers: Set<string> = new Set();

  socketServer.on('connection', socket => {
    socket.on('sendMessage', (data: MessageBody) => {
      socket.broadcast.emit('updateMessages', data);
    });

    socket.on('createRoom', (data: RoomBody) => {
      socket.broadcast.emit('updateRooms', data);
    });

    socket.on('updateMembers', (data: RoomBody) => {
      socket.broadcast.emit('updateRoom', data);
    });

    socket.on('removeRoom', (id: string) => {
      socket.broadcast.emit('updateRooms', id);
    });

    socket.on('saveConnection', (id: string) => {
      connectedUsers.add(id);
      socketServer.emit('updateConnections', Array.from(connectedUsers));
    });

    socket.on('removeConnection', id => {
      connectedUsers.delete(id);
      socket.broadcast.emit('updateConnections', Array.from(connectedUsers));
    });

    socket.on('getConnections', callback => {
      callback(Array.from(connectedUsers));
    });
  });
};

export default createSocketServer;
