import * as express from 'express';
import {Api} from './api'

export class Router{

    public logger: any;
    public router: express.Router
    public api: Api;

    constructor(app){
        this.logger = app.logger
        this.api = new Api(app);
        this.router = express.Router();

       this.setRoutes();
    }

    setRoutes(){
        this.logger.debug('Setting up routes');
        this.router.use('/api/v1', this.api.router);
    }

}
