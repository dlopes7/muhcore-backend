import * as cron from 'cron';

var CronJob = cron.CronJob;

new CronJob('* * * * * *', function(){
    console.log('Test');

}, null, true, 'America/Sao_Paulo');