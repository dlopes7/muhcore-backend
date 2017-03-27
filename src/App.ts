import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as Utils from './classes/utils';
import * as Crontab from './tasks';

import {Messaging} from './classes/Redis';
import {Router} from './routes/'


require('dotenv').config();

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;
  public logger: Utils.Logger;
  public database: Utils.Database;
  public router: Router;
  public realmCrontab: Crontab.RealmCrontab;
  public messaging: Messaging;

  //Run configuration methods on the Express instance.
  constructor() {
    this.logger = new Utils.Logger(this, 'debug')
    this.logger.debug('Setting up express');
    this.messaging = new Messaging(this);

    // This will connect to the mongo database
    this.database = new Utils.Database(this);

    this.router = new Router(this);

    this.realmCrontab = new Crontab.RealmCrontab(this);
    

    this.express = express();
    this.express.set('json spaces', 2);
    this.middleware();
    this.routes();

  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({
      extended: false
    }));


    //Swagger
    this.express.use(express.static('dist/swagger'));
    this.express.get('/', function (req, res) {
      res.sendFile(__dirname + '/swagger/index.html');
    });


  }

  // Configure API endpoints.
  private routes(): void {
    this.express.use('/', this.router.router);
  }

}

export default new App().express;