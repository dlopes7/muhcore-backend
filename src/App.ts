import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import Logger from './utils/logger';

import router from './routes/'

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;


  //Run configuration methods on the Express instance.
  constructor() {
    Logger.debug('Setting up express');
    this.express = express();
    this.express.set('json spaces', 2);
    this.middleware();
    this.routes();
    
    
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    this.express.use('/', router);
  }

}

export default new App().express;