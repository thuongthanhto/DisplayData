import openSocket from 'socket.io-client';
import { config } from '../config/index';

const socket = openSocket(config.apiEndPoint);

function getLogs(cb) {
  socket.on('logs', data => cb(null, data));
}

export { getLogs };
