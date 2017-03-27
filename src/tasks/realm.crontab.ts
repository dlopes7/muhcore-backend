import * as cron from 'cron';
import * as util from 'util';
import Realm from '../models/realm';


import * as blizzard from 'blizzard.js';

require('dotenv').config();

export class RealmCrontab{

    public bnet: any;
    public logger: any;

    constructor(app){
        this.logger = app.logger;

        this.logger.debug(`Initializing the battlenet api with ${process.env.BNET_SECRET}`);
        this.bnet = blizzard.initialize({ apikey: process.env.BNET_SECRET });

    }

    public getRealms(){
        this.bnet.wow.realms()
            .then(response => {
                for (var i = 0; i < response.data.realms.length; i++){
                    const jsonRealm = response.data.realms[i];
                    
                    Realm.create(jsonRealm)
                    .then(doc => {this.logger.debug(`CRONTAB - Realms - Created Realm ${doc}`);})
                    .catch(err => { 
                        if (err.code != 11000){
                            this.logger.error(`CRONTAB - Realms - ${err}`);
                        }                
                        });
                }
            })
            .catch(err => {
                this.logger.error(`CRONTAB - Realms - ${err}`);
            });

    }
}


