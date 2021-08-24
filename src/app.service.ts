import { Injectable } from '@nestjs/common';
import { createServer, Server } from 'net';

@Injectable()
export class AppService {
  private tcpServer: Server;

  constructor() {
    const { PORT = 1337 } = process.env;
    this.tcpServer = createServer();

    this.tcpServer.listen(+PORT, () =>
      console.log(`TCP SERVER STARTED - PORT: ${PORT}`),
    );

    this.tcpServer.on('connection', (conn) => {
      conn.on('data', async (data) => {
        const rawData = data.toString();
        console.log(`AppService ~ conn.on ~ rawData`, rawData);
      });
      conn.once('close', () => {
        console.log('connection from %s closed', conn.remoteAddress);
      });
      conn.on('error', console.error);
    });
  }
}
