
import * as RSMQWorker from 'rsmq-worker'
import * as BPromise from 'bluebird';

export class GuildWorker{

    public worker: any;
    public logger: any;

    constructor(app){
        this.logger = app.logger
        this.worker = new RSMQWorker('guilds_to_process', {autostart: true});
        BPromise.promisifyAll(this.worker);

        this.setUpWorker();
    }

    setUpWorker(){
        this.logger.debug('Setting up worker listener');
        this.worker.onAsync('message')
        .then((message) => {
            console.log(message);
        })
        .catch((err) => {
            console.log(err);
        })

    }

}