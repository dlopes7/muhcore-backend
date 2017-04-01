import {GuildWorker} from './GuildWorker';


export class Workers{

    public logger: any;
    public guildWorker: GuildWorker; 

    constructor(app){
        this.logger = app.logger
        this.guildWorker = new GuildWorker(app);

    }

}
