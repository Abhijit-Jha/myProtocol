# Custom Microservices Protocol using Node.js TCP Sockets

## Overview
This project demonstrates how to build a basic custom protocol for microservices communication using raw TCP sockets in Node.js. It was developed to understand the core principles behind protocols like gRPC and how they can reduce overhead and improve service-to-service communication efficiency.

## Features
- Service-to-service communication using raw TCP
- Microservice registry for easy routing
- Lightweight custom protocol for efficient communication
- Easy-to-extend request/response handlers

## What I Learned
- How to initiate and manage TCP connections
- How custom protocols can reduce payload size and latency
- How microservices communicate under the hood
- How building your own protocol helps understand system design

## Usage
1. The microservices are defined with their own ports. 
2. You can send requests between them using the `sendRequest` method, and set up handlers using `getRequest`.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
