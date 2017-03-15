"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cron = require("cron");
const Logger_1 = require("../utils/Logger");
var CronJob = cron.CronJob;
new CronJob('* * * * * *', function () {
    Logger_1.default.debug('CRONTAB - Realms');
}, null, true, 'America/Sao_Paulo');
