"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const moment = require("moment-timezone");
const logLevels = ['error', 'warn', 'info', 'debug'];
class Logger {
    constructor(level) {
        this.level = level || 'disabled';
    }
    debug(msg) {
        if (logLevels.indexOf(this.level) >= 3) {
            console.log(chalk.gray(`[${moment().toISOString()}] DEBUG: ${msg}`));
        }
    }
}
exports.default = new Logger('debug');
