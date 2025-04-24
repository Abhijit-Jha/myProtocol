import { createServer, createConnection } from "node:net";

const microserviceRegistry = {
  AuthService: { host: "localhost", port: 9001 },
  OtpService: { host: "localhost", port: 9002 },
  PaymentService: { host: "localhost", port: 9003 },
};
export class MyProtocol {
  server;
  name;
  handler;
  constructor(microservice, port) {
    this.name = microservice;
    this.server = createServer((socket) => {
      console.log("TCP connection established..");
      socket.on("data", (data) => {
        if (this.handler) {
          this.handler(`${data.toString()}`, socket);
        } else {
          console.log("No handler");
        }
      });
    });

    this.server.listen(port, () => {
      console.log(`[${this.name}] Listening on port ${port}`);
    });
  }

  sendRequest(to, data) {
    const target = microserviceRegistry[to];
    const client = createConnection(target, () => {
      console.log("Made Connection with", target.host, target.port);
    });

    client.write(data, () => {
      console.log("Data sent to the microservice", to);
      client.end();
    });
  }

  getRequest(handler) {
    this.handler = handler;
  }
}
