"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../utils/logger");
const realm_1 = require("../models/realm");
const blizzard = require("blizzard.js");
require('dotenv').config();
logger_1.default.debug(`Initializing the battlenet api with ${process.env.BNET_SECRET}`);
const bnet = blizzard.initialize({ apikey: process.env.BNET_SECRET });
bnet.wow.realms()
    .then(response => {
    for (var i = 0; i < response.data.realms.length; i++) {
        const jsonRealm = response.data.realms[i];
        realm_1.default.create(jsonRealm)
            .then(doc => { logger_1.default.debug(`CRONTAB - Realms - Created Realm ${doc}`); })
            .catch(err => {
            if (err.code != 11000) {
                logger_1.default.error(`CRONTAB - Realms - ${err}`);
            }
        });
    }
})
    .catch(err => {
    logger_1.default.error(`CRONTAB - Realms - ${err}`);
});
