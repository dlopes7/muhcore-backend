"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cron = require("cron");
var CronJob = cron.CronJob;
new CronJob('* * * * * *', function () {
    console.log('Test');
}, null, true, 'America/Sao_Paulo');
