import * as chalk from 'chalk';
import * as os from 'os';
import * as moment from 'moment-timezone';


const logLevels = ['error', 'warn', 'info', 'debug'];

class Logger{

    private level: string;
    public botkit;

    constructor(level){
        this.level = level || 'disabled';
    }

    public debug(msg): void {
        if (logLevels.indexOf(this.level) >= 3){
            console.log(chalk.gray(`[${moment().toISOString()}] DEBUG: ${msg}`));  
        }
    }
    public error(msg): void {
            console.log(chalk.red(`[${moment().toISOString()}] DEBUG: ${msg}`));  
    }
}

export default new Logger('debug');