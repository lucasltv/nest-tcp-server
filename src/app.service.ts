import { Injectable } from '@nestjs/common';
import { createServer, Server } from 'net';

@Injectable()
export class AppService {
  private tcpServer: Server;

  constructor() {
    const { PORT = 59000 } = process.env;
    this.tcpServer = createServer();

    this.tcpServer.listen(+PORT, () =>
      console.log(`TCP SERVER STARTED - PORT: ${PORT}`),
    );
  }
}
