import * as cron from 'cron';
import * as util from 'util';
import Logger from '../utils/logger';

import Realm from '../models/realm';


import * as blizzard from 'blizzard.js';

require('dotenv').config();

Logger.debug(`Initializing the battlenet api with ${process.env.BNET_SECRET}`);
const bnet = blizzard.initialize({ apikey: process.env.BNET_SECRET });


bnet.wow.realms()
    .then(response => {
        for (var i = 0; i < response.data.realms.length; i++){
             const jsonRealm = response.data.realms[i];
             
             Realm.create(jsonRealm)
             .then(doc => {Logger.debug(`CRONTAB - Realms - Created Realm ${doc}`);})
             .catch(err => { 
                 if (err.code != 11000){
                    Logger.error(`CRONTAB - Realms - ${err}`);
                 }                
                });
        }
    })
    .catch(err => {
        Logger.error(`CRONTAB - Realms - ${err}`);
    });
