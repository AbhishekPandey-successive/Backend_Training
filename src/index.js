import express from 'express';

import Server from './server.js';

const server= new Server();
server.bootstrap()
server.run()