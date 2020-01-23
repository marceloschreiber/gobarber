import express from 'express';
import path from 'path';

import swagger from './swagger';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
    this.server.use(...swagger);
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
