import * as cron from 'cron';
import Logger from '../utils/Logger';

var CronJob = cron.CronJob;

new CronJob('* * * * * *', function(){
    Logger.debug('CRONTAB - Realms');

}, null, true, 'America/Sao_Paulo');