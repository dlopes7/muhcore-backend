
import * as Redis from 'redis';
require('dotenv').config();

class Messaging{

    public client: Redis.RedisClient;

    constructor(){
        this.client = Redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);
    }

    quit(){
        this.client.quit();
    }

    createQueue(){

    }
}


const messaging = new Messaging();

messaging.client.get('chave', Redis.print);



