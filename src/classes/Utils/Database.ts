import * as mongoose from 'mongoose';
import * as BPromise from 'bluebird';
require('mongoose').Promise = BPromise;

export class Database{

    public logger: any;
    constructor(app){
        this.logger = app.logger;
        this.logger.debug('Trying to connect to mongo');

        mongoose.connect('mongodb://localhost/muh_core');
        this.logger.debug('Connected successfully');
    }
}


