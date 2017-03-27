
import * as Redis from 'redis';
import * as RedisMQ from 'rsmq';
import * as BPromise from 'bluebird';

require('dotenv').config();

const QUEUE_GUILDS_PROCESS = 'guilds_to_process';

export class Messaging{

    public client: any;
    public logger: any;

    constructor(app){
        this.logger = app.logger;
        this.logger.debug('Initializing RedisMQ');
        this.client =  new RedisMQ( {host: process.env.REDIS_HOST, port: process.env.REDIS_PORT, ns: "muhcore"} );
        BPromise.promisifyAll(this.client);

        this.createQueues();
		
    }

    addGuildToProcess(jsonMessage: Object): boolean{
        return this.client.sendMessageAsync({qname: QUEUE_GUILDS_PROCESS, message: 'us:azralon:defiant'})
        .then((res) => {
            this.logger.debug(res);
            return true;
        })
        .catch((err) => {
            this.logger.error(err);
            return false;
        })

    }

    createQueues(): void{
        this.logger.debug('Creating "guilds_to_process" queue...')
        this.client.createQueueAsync({qname: QUEUE_GUILDS_PROCESS} )
        .then((message) => {
            this.logger.debug(message);
        })
        .catch((err) => {
            this.logger.debug('Unable to create queue, it exists?');

        });
    }
}







